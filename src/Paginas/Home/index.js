import styles from './Home.module.css';
import PostCard from '../../Components/PostCard';
import Formulario from '../../Components/Fomulario';
import { useContext, useEffect, useState } from 'react';
import FormularioContext from '../../Contexts/FormularioContext'
import Parse from 'parse/dist/parse.min.js';

export default function Home() {
    const { dadosDoFormulario, setDadosDoFormulario } = useContext(FormularioContext);
    const [posts, setPosts] = useState([]);
    
    async function addPost(dados) {
        try {
            let Post;
            if (dados.objectId) {
                const query = new Parse.Query('Post');
                Post = await query.get(dados.objectId);
            } else {
                Post = new Parse.Object('Post');
            }

            Post.set('titulo', dados.titulo);
            Post.set('conteudo', dados.conteudo);
            Post.set('capa', dados.capa);
            
            await Post.save();
            alert('Post salvo com sucesso!');

            const updatedPosts = await new Parse.Query('Post').find();
            setPosts(updatedPosts);

            setDadosDoFormulario({
                'titulo': '',
                'conteudo': '',
                'capa': '',
                'objectId': ''
            });
        } catch (error) {
            console.log('Erro ao salvar o post: ', error);
        }
    }

    useEffect(() => {
        async function fetchPosts() {
            const query = new Parse.Query('Post');
            try {
                const posts = await query.find();
                setPosts(posts);
            } catch (error) {
                console.error(error);
            }
        }
        fetchPosts();
    }, []);

    return (
        <>
        <Formulario onClick={addPost}>
            {dadosDoFormulario.objectId ? 'Editar Post' : 'Adicionar Post'}
        </Formulario>
        <ul className={styles.posts}>
            {posts === null ? (
                <p>Carregando...</p>
            ) : (
                posts.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post} textoBotao={"ver"} isInHomePage={true} />
                    </li>
                ))
            )}
        </ul>
        </>
    );
}

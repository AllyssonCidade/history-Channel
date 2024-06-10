import styles from './Home.module.css';
import PostCard from '../../Components/PostCard';
import Formulario from '../../Components/Fomulario';
import { useContext, useEffect, useState } from 'react';
import FormularioContext from '../../Contexts/FormularioContext'
import Parse from 'parse/dist/parse.min.js';

export default function Home() {
    const { dadosDoFormulario } = useContext(FormularioContext);
    const [posts, setPosts] = useState([]);

        async function addPost() {
            try {
            const Post = new Parse.Object('Post');
            Post.set(dadosDoFormulario);
            await Post.save();
            alert('Post saved!');
            } catch (error) {
            console.log('Error saving new post: ', error);
            }
        }
        useEffect(() => {
            async function fetchPost() {
                const query = new Parse.Query('Post');
                try {
                    const posts = await query.find();
                    setPosts(posts);
                } catch (error) {
                    console.error(error);
                }
            }
            fetchPost();
        }, []);
        console.log(posts)
    
    return (
        <>
        <Formulario onClick={addPost} >
            Adicionar Post
        </Formulario>
        <ul className={styles.posts}>
            {posts === null ? (
                <p>Carregando...</p>
            ) : (
                posts.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post} textoBotao={"editar"} isInHomePage={true} />
                    </li>
                ))
            )}
        </ul>
        {/* <ul className={styles.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <PostCard post={post} textoBotao={"editar"} isInHomePage={true}/>
                </li>
            ))}
        </ul> */}
            </>
    )
}


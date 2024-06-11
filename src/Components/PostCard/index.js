import styles from './Post.module.css';
import BotaoPrincipal from '../../Components/BotaoPrincipal';
import { AiFillCloseCircle, AiFillEdit } from "react-icons/ai";
import { useContext, useState } from 'react';
import FormularioContext from '../../Contexts/FormularioContext';

export default function PostCard({ post, textoBotao, isInHomePage }) {
    const { setDadosDoFormulario } = useContext(FormularioContext);
    const [deletarPost, setDeletarPost] = useState(false);

    async function aoDeletar() {
        await post.destroy();
        setDeletarPost(true);
    }

    function aoEditar() {
        const dataPost = {
            objectId: post.id,
            titulo: post.get('titulo'),
            conteudo: post.get('conteudo'),
            capa: post.get('capa')
        };
        setDadosDoFormulario(dataPost);
    }

    if (deletarPost) {
        return null;
    }

    return (
        <div>
            <div className={styles.post}>
                {isInHomePage && (
                    <>
                        <AiFillCloseCircle className={styles.deletar} onClick={aoDeletar} />
                        <AiFillEdit className={styles.editar} onClick={aoEditar} />
                    </>
                )}
                <img
                    className={styles.capa}
                    src={post.get('capa')}
                    alt='imagem de capa do post'
                />
                <h2 className={styles.titulo}>{post.get('titulo')}</h2>
                <BotaoPrincipal to={`/posts/${post.id}`}>{textoBotao}</BotaoPrincipal>
            </div>
        </div>
    );
}

import { useParams } from "react-router-dom";
import PostModelo from '../../Components/PostModelo';
import "./Post.css";
import NaoEncontrada from '../../Paginas/NaoEncontrada';
import PaginaPadrao from '../../Components/PaginaPadrao';
import PostCard from '../../Components/PostCard';
import styles from './Post.module.css';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from "react";
import Parse from 'parse/dist/parse.min.js';
import rehypeRaw from 'rehype-raw';

export default function Post() {
    const { id } = useParams();
    const [post, setPost] = useState(undefined);
    const [posts, setPosts] = useState([]);
    const [postRecomendado, setPostRecomendado] = useState([]);
    useEffect(() => {
        async function fetchPost() {
            const query = new Parse.Query('Post');
            try {
                const post = await query.get(id);
                setPost(post);
            } catch (error) {
                console.error(error);
                setPost(null);
            }
        }

        async function fetchPosts() {
            const query = new Parse.Query('Post');
            try {
                const posts = await query.find();
                setPosts(posts);
            } catch (error) {
                console.error(error);
                setPosts([]);
            }
        }

        fetchPost();
        fetchPosts();
    }, [id]);

    useEffect(() => {
        if (posts.length > 0 && post) {
            const filteredPosts = posts.filter((p) => p.id !== post.id)
                                       .sort((a, b) => b.createdAt - a.createdAt)
                                       .slice(0, 4);
            setPostRecomendado(filteredPosts);
        }
    }, [posts, post]);

    if (post === undefined) {
        return <p>Carregando...</p>;
    }

    if (post === null) {
        return <NaoEncontrada />;
    }

    return (
        <PaginaPadrao>
            <PostModelo
                fotoCapa={post.get('capa')}
                titulo={post.get('titulo')}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                        {post.get('conteudo')}
                    </ReactMarkdown>
                </div>
                <h2 className={styles.tituloOutrosPosts}>
                    Outros posts que você pode gostar:
                </h2>
                <ul className={styles.postsRecomendados}>
                    {postRecomendado.map((post) => (
                        <li key={post.get('id')}>
                            <PostCard post={post} textoBotao={"Ler"} />
                        </li>
                    ))}
                </ul>
            </PostModelo>
        </PaginaPadrao>
    );
}

import { useState, useEffect } from 'react';
import styles from './Inicio.module.css';
import Parse from 'parse/dist/parse.min.js';
import PostCard from '../../Components/PostCard';

export default function Inicio() {
    const [post, setPost] = useState(null);

    useEffect(() => {
        async function fetchPost() {
            const query = new Parse.Query('Post');
            try {
                const posts = await query.find();
                setPost(posts);
            } catch (error) {
                console.error(error);
            }
        }

        fetchPost();
    }, []);

    return (
        <ul className={styles.posts}>
            {post === null ? (
                <p>Carregando...</p>
            ) : (
                post.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post} textoBotao={"ler"} />
                    </li>
                ))
            )}
        </ul>
    );
}

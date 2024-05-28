import styles from "./Login.module.css";
import Parse from 'parse/dist/parse.min.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const doUserLogin = async (event) => {
        event.preventDefault();
        const usernameValue = username;
        const passwordValue = password;
        console.log("Username value:", usernameValue);
        console.log("Password value:", passwordValue);
        if (usernameValue.length === 0 || passwordValue.length === 0){
            alert('Username e/ou senha não podem estar vazios.');
            return false;
        }
        
        try {
            const logedUser = await Parse.User.logIn(usernameValue, passwordValue);
            alert(`Success! User ${logedUser.get('username')} was successfully loged!`);
            const currentUser = Parse.User.current();
            if (currentUser){
                navigate("/home");
            }
            return true;
        } catch (error) {
            alert(`Por favor verifique os dados de acesso e tente novamente:`);
            return false;
        }
    };
    
    // const doUserRegistration = async (event) => {
    //     event.preventDefault();
    //     const usernameValue = username;
    //     const passwordValue = password;
    //     console.log("Username value:", usernameValue);
    //     console.log("Password value:", passwordValue);
    //     if (usernameValue.length === 0 || passwordValue.length === 0){
    //         alert('Username e/ou senha não podem estar vazios.');
    //         return false;
    //     }
        
    //     try {
    //         const createdUser = await Parse.User.signUp(usernameValue, passwordValue);
    //         alert(`Success! User ${createdUser.getUsername()} was successfully created!`);
    //         navigate("/home");
    //         return true;
    //     } catch (error) {
    //         alert(`Error signing up:, ${error}`);
    //         alert(`Error! ${error}`);
    //         return false;
    //     }
    // };
    
    return (
        <main className={styles.login}>
            <h2 className={styles.login__titulo}>Login</h2>
            <form onSubmit={doUserLogin} className={styles.login__form}>
                <label>Nome</label>
                <input value={username} onChange={(event) => setUsername(event.target.value)} className={styles.login__input} type="text" placeholder="Digite seu Nome" />
                <label>Senha</label>
                <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" className={styles.login__input} placeholder="Digite sua senha" />
                <button type="submit" className={styles.botao__login}>Entrar</button>
            </form>
        </main>
    );
};

export default Login;

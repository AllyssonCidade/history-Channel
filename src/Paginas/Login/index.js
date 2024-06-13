import styles from "./Login.module.css";
import Parse from 'parse/dist/parse.min.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext';


export const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login, logout } = useAuth();

    const doUserLogin = async (event) => {
        event.preventDefault();
        const usernameValue = username;
        const passwordValue = password;
        
        if (usernameValue.length === 0 || passwordValue.length === 0){
            alert('Username e/ou senha não podem estar vazios.');
            return false;
        }
        
        try {
            const logedUser = await Parse.User.logIn(usernameValue, passwordValue);
            alert(`Success! User ${logedUser.get('username')} Está logado!`);
            const currentUser = Parse.User.current();
            
            if (currentUser){
                login();
                navigate("/home");
                setTimeout(() => {
                    navigate("/login");
                    Parse.User.logOut();
                    logout()
                    alert("Tempo de login expirado, por favor realize o LogIn novamente para continuar")
                }, 3600000)
            }

            return true;
        } catch (error) {
            alert(`Por favor verifique os dados de acesso e tente novamente:`);
            return false;
        }
        };
   
    
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

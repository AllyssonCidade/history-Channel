import styles from './Menu.module.css';
import MenuLink from '../MenuLink';
import Parse from 'parse/dist/parse.min.js';
import { useAuth } from '../../Contexts/AuthContext';

export default function Menu() {
    const { isAuthenticated, logout } = useAuth();
    async function doUserLogout(){
        Parse.User.logOut();
        logout();
    }

    return (
        <header>
            <nav className={styles.navegacao}>
    
                <MenuLink to = "/">
                    Início
                </MenuLink>
                <MenuLink to= "/sobremim">
                    Sobre Mim
                </MenuLink>
                {isAuthenticated ? 
                <MenuLink onClick={doUserLogout} to= "/login" >
                    Logout
                </MenuLink>
                    :
                <MenuLink to= "/login">
                    Login
                </MenuLink>
                }
                {isAuthenticated ? 
                <MenuLink to= "/home">
                    Home
                </MenuLink>
                :
                null
                }
            </nav>
        </header>
    )
}
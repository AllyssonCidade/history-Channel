import styles from './Menu.module.css';
import MenuLink from '../MenuLink';
import Parse from 'parse/dist/parse.min.js';

export default function Menu() {
    const currentUser = Parse.User.current();

    return (
        <header>
            <nav className={styles.navegacao}>
    
                <MenuLink to = "/">
                    Início
                </MenuLink>
                <MenuLink to= "/sobremim">
                    Sobre Mim
                </MenuLink>
                {currentUser ? 
                <MenuLink to= "/home">
                    Home
                </MenuLink>
                    :
                <MenuLink to= "/login">
                    Login
                </MenuLink>
                 }
            </nav>
        </header>
    )
}
import { NavLink } from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MenuLink({ children, to, onClick }) {

    return (
        <NavLink
            className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
            `}
            to={to}
            end
            onClick={onClick}
        >
            {children}
        </NavLink>
    )
}
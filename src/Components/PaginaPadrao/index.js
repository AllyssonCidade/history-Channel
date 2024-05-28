import Banner from '../Banner'
import ScrollToTopButton from '../ScrollToTopButton'
import { Outlet } from "react-router-dom";

export default function PaginaPadrao({children}){
    return (
        <main>
            <Banner />
            {children}
            <Outlet />
            <ScrollToTopButton />
        </main>
    )
}
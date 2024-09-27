import { Navbar } from "./navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";

export function Layout() {
    return(
        <>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}
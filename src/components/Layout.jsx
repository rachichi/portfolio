import { Navbar } from "./navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";

export function Layout() {
    return(
        <div>
            <Navbar/>
            <div className="content">
                <main>
                    <Outlet/>
                </main>
                <Footer/>
            </div>
            
        </div>
    )
}
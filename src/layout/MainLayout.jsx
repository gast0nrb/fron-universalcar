import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const MainLayout = () => {
    return(
        <>
        <Nav/>
        <Header/>
            <Outlet/>
        <Footer/>
        </>
    )
}

export default MainLayout
import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Nav from "../components/Nav"

const ErrorPage = () => {
    return(
        <>
        <Nav/>
        <div className="w-12/12 mx-auto h-dvh content-center">
            <div className="w-10/12 mx-auto text-center bg-light-blue-color h-1/2 rounded-sm content-center">
                <h1 className="font-bold md:text-xl lg:2xl tracking-wider">ES FÁCIL PERDERSE EN EL UNIVERSO DE <span className="text-green-color tracking-widest">UNIVERSALCAR</span></h1>
                <Link className="hover:text-green-color text-indigo-600 underline" to={"/"}>Volver a la página de inicio</Link>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default ErrorPage
import Icon from "./Icon";

const Footer = () => {
    return (
        <footer id="footer" className="w-full bg-blue-color h-36 text-center md:flex-wrap lg:flex">
            <div className="my-auto basis-2/4 grow lg:border-r-2 lg:border-0 md:border-b-2 p-2 border-indigo-600">
                <h2 className="md:text-lg lg:text-xl text-nowrap font-bold text-neutral-300 tracking-widest flex justify-center">CONTACTANOS
                    <Icon active={true} urlActive="/images/contact.svg"/>
                </h2>
                <div className="justify-center flex">
                    <a  className="hover:text-green-color text-indigo-600 duration-300 underline" href="mailto:contacto@universalcar.cl">contacto@universalcar.cl
                        </a> 
                        <Icon active={true} urlActive="/images/email.svg"/>
                </div>
                <div className="basis-2/4 flex justify-center">
                    <a className="hover:text-green-color text-indigo-600 duration-300 underline" href="tel:+56222227413">+56222227413
                        </a> 
                        <Icon active={true} urlActive="/images/phone.svg"/>
                </div>
            </div>
            <div className="my-auto basis-2/4 grow">
                <h3 className="flex justify-center text-neutral-300 mx-auto font-bold md:text-lg lg:text-2xl tracking-widest">CONSTRUIDA POR
                    <Icon active={true} urlActive={"/images/construction.svg"}/>
                </h3>
                <a className="underline hover:text-green-color text-indigo-600 duration-300" href="https://www.youtube.com/watch?v=yO0YjqMVAoo&list=PLI6kLIhBBwmT_jUt8YZ8v5bA9JF0ktToF&index=3">www.cotizcar.cl</a>
            </div>
        </footer>
    )
}

export default Footer;
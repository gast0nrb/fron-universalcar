import { useState } from "react";
import Icon from "./Icon"

const Quienes = ({texto="Somos una empresa dedicada a la venta de accesorios y repuestos automotrices, enfocada a la buena atención a nuestros clientes y mantener una gran variedad de productos."}) => {
    const [active, setActive] = useState(false)
    return(
        <div 
        onMouseOver={()=> setActive(true)} onMouseLeave={()=> setActive(false)} 
        className="group basis-5/12 grow flex-wrap text-center bg-blue-color rounded-md p-1 lg:mb-0 md:mb-1">
            <div>
                <h3 className="flex justify-center font-extrabold duration-300 md:text-sm lg:text-xl rounded-sm bg-light-blue-color md:text-green-color group-hover:text-green-color lg:text-neutral-300">NOSOTROS
                    <Icon active={active}/>
                </h3> 
            </div>  
            <div>
                <p className="text-base md:text-neutral-300 lg:text-neutral-500 group-hover:text-white duration-300">{texto}</p>
            </div>  
        </div>
    )
}

export default Quienes;
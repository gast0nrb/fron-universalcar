import CategoriasItem from "./CategoriasItem";
import Icon from "./Icon"
import { useState } from "react";

const Categorias = () => {
    const [active, setActive] = useState(false)
    return (
        <>
        <section
        id="categoria"
        onMouseOver={()=> setActive(true)} onMouseLeave={()=> setActive(false)} 
        className="group md:w-10/12 lg:w-8/12 mx-auto bg-light-blue-color py-2 rounded-md">
           <div className="w-11/12 mx-auto bg-blue-color rounded-sm flex-wrap">
            <div className="text-center">
                <h3 className="flex justify-center font-bold group-hover:text-white text-neutral-300 md:text-xl lg:text-2xl">¿QUÉ VENDEMOS?
                    <Icon active={active}/>
                </h3>
            </div>
           <div className="flex flex-wrap p-1 justify-center">
                <CategoriasItem text="Ampolletas"/>
                <CategoriasItem text="FAROLES"/>
                <CategoriasItem text="LUCES LED"/>
                <CategoriasItem text="PLUmillas"/>
                <CategoriasItem text="Seguridad"/>
                <CategoriasItem text="Repuestos"/>
                <CategoriasItem text="Broches"/>
                <CategoriasItem text="aromaticos"/>
                <CategoriasItem text="faroles"/>
                <CategoriasItem text="cables"/>
                <CategoriasItem text="turboled"/>
                <CategoriasItem text="Y muchos más"/>
           </div>
           </div> 
        </section>
        </>
    )
}

export default Categorias;
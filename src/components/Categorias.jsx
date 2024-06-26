import CategoriasItem from "./CategoriasItem";

const Categorias = () => {
    return (
        <>
        <div className="group md:w-10/12 lg:w-8/12 mx-auto bg-light-blue-color py-2 rounded-md">
           <div className="w-11/12 mx-auto bg-blue-color rounded-sm flex-wrap">
            <div className="text-center">
                <h3 className="group-hover:text-white text-neutral-300 md:text-xl lg:text-2xl">¿NUESTRAS CATEGORIAS?</h3>
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
                <CategoriasItem text="aromaticos"/>
                <CategoriasItem text="aromaticos"/>
                <CategoriasItem text="Electronicos"/>
                <CategoriasItem text="Y muchos más"/>
           </div>
           </div> 
        </div>
        </>
    )
}

export default Categorias;
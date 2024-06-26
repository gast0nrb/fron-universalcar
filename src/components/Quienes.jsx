const Quienes = ({texto="Somos una empresa dedicada a la venta de accesorios y repuestos automotrices, enfocada a la buena atención a nuestros clientes y mantener una gran variedad de productos."}) => {
    return(
        <div className="group basis-5/12 grow flex-wrap text-center bg-blue-color rounded-md p-1 lg:mb-0 md:mb-1">
            <div>
                <h3 className="duration-300 md:text-sm lg:text-xl rounded-sm bg-light-blue-color group-hover:text-green-color text-neutral-300">NOSOTROS</h3> 
            </div>  
            <div>
                <p className="text-xs text-neutral-500 group-hover:text-white duration-300">{texto}</p>
            </div>  
        </div>
    )
}

export default Quienes;
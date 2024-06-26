import EnfoqueItem from "./EnfoqueItem";

const Enfoque = () => {
    return (
        <div className="group basis-5/12 grow flex-wrap text-center bg-blue-color rounded-md p-1">
            <div className="basis-full mb-2">
                <h3 className="group-hover:text-white md:text-sm lg:text-xl bg-light-blue-color text-neutral-300">ENFOQUE</h3>
            </div>
            <div className="basis-full lg:flex md:flex-wrap gap-2">
                <EnfoqueItem val={"variedad"} text={"Contamos con gran variedad de productos para satisfacer la necesidad que requiera su vehiculo."} title={"VARIEDAD DE PRODUCTOS"}/>
                <EnfoqueItem val={"ejemplar"} text={"Nos esformazamos día a día por atender de la mejor manera posible a nuestros clientes."} title={"ATENCIÓN AL CLIENTE EJEMPLAR"}/>
                <EnfoqueItem val={"alegria"} text={"No pueden faltar las risas!"} title={"ALEGRIA"}/>
                <EnfoqueItem val={"conseguir"} text={"Si no lo tenemos, te lo conseguimos..."} title={"TE LO CONSEGUIMOS"}/>
            </div>
        </div>

    )
}

export default Enfoque;
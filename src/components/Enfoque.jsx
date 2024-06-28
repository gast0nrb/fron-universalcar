import EnfoqueItem from "./EnfoqueItem";
import Icon from "./Icon";
import { useState } from "react"

const Enfoque = () => {
    const [acive, setActive] = useState(false)
    return (
        <div onMouseOver={()=>setActive(true)} onMouseLeave={()=>setActive(false)} className="group basis-5/12 grow flex-wrap text-center bg-blue-color rounded-md p-1">
            <div className="basis-full mb-2">
                <h3 className="flex justify-center lg:group-hover:text-white md:text-sm lg:text-xl bg-light-blue-color md:text-green-color lg:text-neutral-300 font-extrabold">ENFOQUE
                    <Icon active={acive} urlActive={"/images/parking.svg"} urlInactive={"/images/parking-off.svg"}/>
                </h3>
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
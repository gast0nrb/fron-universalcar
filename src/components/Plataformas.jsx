import PlataformaImg from "./PlataformaImg";
import Icon from "./Icon"
import { useState } from "react";

const Plataformas = ({ title }) => {
    const [active, setActive] = useState(false)
  const Plataformas = [
    {
      id: 0,
      url: "/images/wspp.svg",
      nombre: "Whatssap",
      direccionamiento  : "https://wa.me/+569399525"
    },
    {
      id: 0,
      url: "/images/fb.svg",
      nombre: "Facebook",
      direccionamiento : "https://www.facebook.com/universalcarcl"
    },
    {
      id: 0,
      url: "/images/ig.svg",
      nombre: "Instagram",
      direccionamiento : "https://www.instagram.com/universal_car_cl/"
    },
    {
      id: 0,
      url: "/images/ml.svg",
      nombre: "Mercado Libre",
      direccionamiento : "#"
    },
  ];
  return (
    <section 
    id="plataformas"
        onMouseOver={()=> setActive(true)} onMouseLeave={()=> setActive(false)} 
    className="basis-5/12 grow group/sucursal m-2 md:my-3 bg-blue-color rounded-md p-2 h-auto">
      <h3 className="flex justify-center rounded-sm group-hover/sucursal:text-white text-center md:text-sm lg:text-lg text-neutral-300 font-bold mb-3">
        {title}
        <Icon active={active}/>
      </h3>
      <div className="md:flex-wrap flex w-11/12 mx-auto rounded-md justify-center">
        {Plataformas.map((v, i) => (
          <PlataformaImg key={i} nombre={v.nombre} direccionamiento={v.direccionamiento} url={v.url} />
        ))}
      </div>
    </section>
  );
};

export default Plataformas;

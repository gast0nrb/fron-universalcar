import { Link } from "react-router-dom";

const PlataformaImg = ({ url, nombre, direccionamiento }) => {
  return (
    <div className="group/img flex-wrap grow mx-1 text-center p-1 bg-transparent hover:scale-125 duration-500">
      <a className={`bg-green-50 p-0 ${nombre=="Mercado Libre" ? "pointer-events-none" : ""}`} href={direccionamiento}>
        <img className=" mx-auto md:w-10 lg:w-16" src={url} alt="" />
      </a>
      <p className="group-hover/img:text-green-color duration-500 font-bold w-full text-neutral-300 text-center">{nombre}</p>
    </div>
  );
};

export default PlataformaImg;

import { useState } from "react";

const DondeWeb = () => {
  const Sucursales = [
    {
      id: 0,
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.8915806166633!2d-70.64102012476492!3d-33.45213109759742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5719dd05931%3A0x3533420200b04d87!2sDiez%20de%20Julio%20413%2C%208330552%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1719415139400!5m2!1ses!2scl",
      nombre: "Sucursal 413-A",
    },
    {
      id: 1,
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.8936495209173!2d-70.6384772!3d-33.45207719999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c571773f78b3%3A0x67aa57bcbb554a24!2sDr.%20Brunner%20698%2C%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1719418221768!5m2!1ses!2scl",
      nombre: "Sucursal Doctor Brunner",
    },
  ];

  const [currentSucursal, setCurrent] = useState(0);
  const [sucursal, setSucursal] = useState(Sucursales[0]);

  function incrementaSucursal() {
    if (currentSucursal == Sucursales.length - 1) {
      setCurrent(0);
      setSucursal(Sucursales[currentSucursal]);
    } else {
      setCurrent(currentSucursal + 1);
      setSucursal(Sucursales[currentSucursal]);
    }
  }

  function restaSucursal() {
    if (currentSucursal == 0) {
      setCurrent(Sucursales.length - 1);
      setSucursal(Sucursales[currentSucursal]);
    } else {
      setCurrent(currentSucursal - 1);
      setSucursal(Sucursales[currentSucursal]);
    }
  }

  return (
    <div className="basis-5/12 grow group/sucursal m-2 md:my-3 bg-blue-color rounded-md p-2">
      <h3 className="group-hover/sucursal:text-white text-center md:text-sm lg:text-lg text-neutral-300 font-bold">
        ONLINE
      </h3>
      <div className="flex justify-center w-full">
        <button
          onClick={() => restaSucursal()}
          className="hover:scale-125 duration-300 hover:text-green-color bg-light-blue-color h-min my-auto w-4 rounded-full text-neutral-300 mr-2"
        >
          &#171;
        </button>
        <a
          className="mx-auto w-10/12"
          src={sucursal.url}
        >
         <img src="" alt="" />   
        </a>
        <button
          onClick={() => incrementaSucursal()}
          className="hover:scale-125 duration-300 hover:text-green-color bg-light-blue-color h-min my-auto w-4 rounded-full text-neutral-300 ml-2"
        >
          &#187;
        </button>
      </div>
      <p className="group-hover/sucursal:text-white text-center text-neutral-300">
        {sucursal.nombre}
      </p>
    </div>
  );
};

export default DondeWeb;
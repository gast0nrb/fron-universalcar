import DondeSucursal from "./DondeSucursal";
import Plataformas from "./Plataformas";


const Donde = () => {

  return (
    <>
      <hr className="mt-20 mb-6 bg-light-blue-color border-2" />
      <h2 className="text-center font-extrabold text-blue-color lg:text-4xl md:text-xl mt-10 tracking-widest">
        ¿DÓNDE ESTAMOS?
      </h2>
      <section id="donde" className="md:flex-wrap lg:flex mx-auto mb-20">
      <DondeSucursal title={"SUCURSALES"}/>
      <Plataformas title={"ONLINE"}/>
      </section>
    </>
  );
};

export default Donde;

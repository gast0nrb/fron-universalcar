import DondeSucursal from "./DondeSucursal";
import DondeWeb from "./DondeWeb";

const Donde = () => {
  return (
    <>
      <hr className="mt-20 mb-6 bg-light-blue-color border-2" />
      <h2 className="text-center font-extrabold text-blue-color lg:text-2xl md:text-xl mt-10 tracking-widest">
        ¿DONDE?
      </h2>
      <div className="md:flex-wrap lg:flex mx-auto">
      <DondeSucursal/>
      <DondeWeb/>
      </div>
    </>
  );
};

export default Donde;

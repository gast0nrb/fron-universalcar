import Quienes from "./Quienes"
import Enfoque from "./Enfoque"

const WrapInfo =() => {
    return (
        <div id="#first" className="w-11/12 mb-14 mt-10 gap-1 lg:flex md:flex-wrap mx-auto">
           <Quienes/> 
           <Enfoque/>
        </div>
    )
}

export default WrapInfo
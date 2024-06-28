
const Icon = ({urlActive="/images/parking.svg", urlInactive="/images/parking-off.svg", active}) => {
    return(
                    <span className="my-auto ml-1">
                        <img  className="w-5" src={`${active? urlActive : urlInactive}`} alt="" />
                    </span>
    )
}

export default Icon
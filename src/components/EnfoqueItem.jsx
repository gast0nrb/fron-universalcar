
const EnfoqueItem = ({title, text, val}) => {
    return(
                <div className="group/display border-2 border-light-blue-color basis-5/12 grow mb-1">
                    <div className="group-hover/display:text-green-color md:text-green-color lg:text-neutral-500 duration-300">{title}</div>
                    <p className="group-hover/display:block lg:hidden text-white text-xs duration-700">{text}</p>
                </div>
    )
}

export default EnfoqueItem
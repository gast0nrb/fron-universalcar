const CategoriasItem = ({text="default"}) => {
    return (
        <div className="m-1 grow basis-auto px-1 border-2 border-light-blue-color rounded-sm text-center group/cItem group-hover/cItem hover:border-green-color">
            <p className="lg:text-neutral-600 text-xs md:text-green-color group-hover/cItem:text-green-color">{text.toLocaleLowerCase()}</p>
        </div>
    )
}

export default CategoriasItem
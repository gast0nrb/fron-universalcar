import Icon from "../components/Icon"

const Nav = ()  => {
return(
    <nav className='fixed w-full top-0 lg:bg-blue-color text-center lg:h-9 md:h-22 z-50 mb-5'>
        <ul className=' md:bg-blue-color lg:inline-flex md:grid md:grid-cols-2 leading-9'>
          <li className='group lg:mx-6 text-white lg:border-none md:mx-0'>
            <a className='group-hover:text-green-color flex justify-center' href="/#header">CATEGORIAS 
             <Icon urlInactive='/images/category.svg' active={false} /> 
            </a>
          </li>
          <li className='group lg:mx-6 text-white lg:border-none md:mx-0'>
            <a  className="flex justify-center group-hover:text-green-color" href="/#footer">CONTACTO
             <Icon urlInactive='/images/contact.svg' active={false} /> 
            </a>
          </li>
          <li className='group lg:mx-6 text-white lg:border-none md:border-t-indigo-600 md:border-t-2 md:mx-0'>
            <a href="/#sucursales" className='group-hover:text-green-color flex justify-center'>UBICACIÓN
             <Icon urlInactive='/images/place.svg' active={false} /> 
            </a>
          </li>
          <li className='group lg:mx-6 text-white lg:border-none md:border-indigo-600 md:border-t-2 md:mx-0'>
            <a className="group-hover:text-green-color flex justify-center" href="/#plataformas">PLATAFORMAS
             <Icon urlInactive='/images/web.svg' active={false} /> 
            </a>
          </li>
        </ul>
    </nav>
)
}

export default Nav;
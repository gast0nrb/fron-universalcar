import React from 'react'

function Header() {
  return (
    <div className="w-full">
    <nav className='min-w-min lg:bg-blue-color text-center lg:h-9 md:h-22'>
        <ul className=' md:bg-blue-color lg:inline-flex md:grid md:grid-cols-2 leading-9'>
          <li className='group lg:mx-6 text-white lg:border-none md:mx-0'>
            <a className='group-hover:text-green-color' href="">PRODUCTOS</a>
          </li>
          <li className='group lg:mx-6 text-white lg:border-none md:mx-0'>
            <a  className="group-hover:text-green-color" href="">CONTACTO</a>
          </li>
          <li className='group lg:mx-6 text-white lg:border-none md:border-t-indigo-600 md:border-t-2 md:mx-0'>
            <a href="" className='group-hover:text-green-color'>UBICACIÓN</a>
          </li>
          <li className='group lg:mx-6 text-white lg:border-none md:border-indigo-600 md:border-t-2 md:mx-0'>
            <a className="group-hover:text-green-color" href="">PLATAFORMAS</a>
          </li>
        </ul>
    </nav>
    <div className="lg:pt-2 xl:tracking-[.25em] lg:tracking-[.15em] drop-shadow-xl text-center mt-8">
      <h1 className='font-bold xl:hover:text-9xl lg:hover:text-6xl duration-200 xl:text-8xl lg:text-5xl md:text-3xl text-blue-color drop-shadow-xl'>UNIVERSALCAR</h1>
    </div>
    <div className=' hover:scale-110 md:w-10/12 text-center p-0 bg-light-blue-color w-2/5 mx-auto rounded-sm duration-300'>
      <h2 className='hover:brightness-200 duration-300 text-green-color xl:text-2xl md:text-1xl'>EL UNIVERSO PARA TU VEHICULO</h2>
    </div>
    </div>
  )
}

export default Header
import React from 'react'

function Header() {
  return (
    <div id="header" className="w-full mt-20">
    <div className="lg:pt-2 xl:tracking-[.25em] lg:tracking-[.15em] drop-shadow-xl text-center mt-8">
      <h1 className='font-bold xl:hover:text-9xl lg:hover:text-6xl duration-200 xl:text-8xl lg:text-5xl md:text-3xl text-blue-color drop-shadow-xl'>UNIVERSALCAR</h1>
    </div>
    <div className='flex justify-center hover:scale-110 md:w-10/12 text-center p-0 bg-light-blue-color w-2/5 mx-auto rounded-sm duration-300'>
      <h2 className=' flex hover:brightness-200 mx-2 duration-300 text-green-color xl:text-2xl md:text-1xl'>EL UNIVERSO PARA TU VEHICULO 
      </h2>
    </div>
    </div>
  )
}

export default Header
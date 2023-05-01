import React from 'react'

const NavbarComponent = () => {
  return (
    <>
        <nav className='w-full h-20 bg-white drop-shadow-md flex justify-between  ps-10 md:pe-20  pe-3 transition-all '>
            <div className='hidden md:block   pt-6 md:pt-7 md:text-sm  lg:text-lg  font-bold text-gray-500'>
                
                <ul className='flex cursor-pointer'>
                    <li className='px-3 hover:text-red-300'>Wines</li>
                    <li className='px-3 hover:text-red-300'>Gift Cards</li>
                    <li className='px-3 hover:text-red-300'>Discover</li>
                    <li className='px-3 hover:text-red-300'>Winc Shares</li>
                </ul>
            </div>
            <div className='md:hidden'>
                <h1 className=' font-extrabold text-4xl lg:text-6xl md:text-5xl pt-5 lg:pt-2 md:pt-3 font-serif  '>Winc</h1>
            </div>
            <div className='pt-6 md:text-sm  lg:text-lg font-bold'>
                <button className='md:pe-10 text-gray-500 hover:text-red-300 transition-all '>Sign in</button>
                <button className='pe-2 md:pe-3 border-red rounded-full border-solid border-2  border-red-400 text-red-400 py-1 px-2 hover:border-green-400 hover:text-green-400 invisible md:visible'>Get Started</button>
            </div>
        </nav>
    </>
    )
}

export default NavbarComponent
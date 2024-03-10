import React from 'react'
import { Link } from 'react-router-dom'

const menus = [
    "Home",
    "Movies",
    "Detail"
]

const Navbar = () => {
  return (
    <div className='backdrop-blur-sm fixed top-0 left-0 right-0 z-[999]'>
    <nav className="flex px-6 justify-between max-w-[1200px] mx-auto p-6">
        <div>
            <a href="/" className="text-2xl font-bold hover:translate-y-[-3px] transition-all duration-[0.5s] block">MoviesOfManiac</a>
        </div>

        <ul className="flex justify-center items-center gap-6">
            {menus.map((menu, index) => (
                <li key={index}><Link className="px-3 py-2 rounded-md text-white bg-slate-800 hover:bg-slate-700" to={menu === "Home" ? "/" : `/${menu.toLowerCase()}`}>{menu}</Link></li>
            ))}
        </ul>
    </nav>
    </div>
  )
}

export default Navbar
'use client'

import { useUIStore } from "@/store"
import clsx from "clsx"
import Link from "next/link"

import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5"


export const Sidebar = () => {
    const isSidebarOpen = useUIStore(state => state.isSideMenuOpen)
    const clouseMenu = useUIStore(state => state.closeSideMenu)
    
  return (
    <div>
        {/* Background black */}
        {
            isSidebarOpen && (
                    <div
                        className=" fixed top-0 left-0 w-screen h-screen bg-black opacity-30 z-10"
                    />

            )
        }
        {/* Blur */}

        {
            isSidebarOpen && (

                <div
                    onClick={clouseMenu} 
                    className=" fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm">
                </div >
            )
        }


        {/* SideMneu */}
        <nav className={
            clsx(
               ' fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300',
               {
                'translate-x-full': !isSidebarOpen,
               }
            )
        }>
            <IoCloseOutline
                className=" absolute top-5 right-5 text-3xl cursor-pointer"
                onClick={clouseMenu}
            />
            {/* input */}

            <div className="relative mt-14">
                <IoSearchOutline
                    size={20}
                    className="absolute top-3 left-3 cursor-pointer"
                />
                <input 
                    type="text"
                    placeholder="Search"
                    className="w-full bg-gray=100 rounded-md pl-10 py-1 pr-10 border-b-2  text-xl  border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300" 
                />
            </div>
            {/* Menu */}
            <Link
                href="/"
                className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
                <IoPersonOutline size={30} />
                <span className="ml-3 text-xl">Perfil</span>
            </Link>
            <Link
                href="/"
                className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
                <IoTicketOutline size={30} />
                <span className="ml-3 text-xl">Ordenes</span>
            </Link>
            <Link
                href="/"
                className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
                <IoLogInOutline size={30} />
                <span className="ml-3 text-xl">Ingresar</span>
            </Link>
            <Link
                href="/"
                className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
                <IoLogOutOutline size={30} />
                <span className="ml-3 text-xl">Salir</span>
            </Link>
            {/* line separator */}
            <div
                className="w-full h-px bg-gray-300 my-10"
            />
            
            <Link
                href="/"
                className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
                <IoShirtOutline size={30} />
                <span className="ml-3 text-xl">Productos</span>
            </Link>
            <Link
                href="/"
                className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
                <IoTicketOutline size={30} />
                <span className="ml-3 text-xl">Ordenes</span>
            </Link>
            <Link
                href="/"
                className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
                <IoPeopleOutline size={30} />
                <span className="ml-3 text-xl">Usuarios</span>
            </Link>

        </nav>
    </div>
  )
}

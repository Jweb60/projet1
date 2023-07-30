import { useState } from "react"
import hamburger from "../assets/menu.svg"
import close from "../assets/close.svg"


export default function Navbar() {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <nav className="fixed top-0 w-full h-[5em] flex justify-center p-4 bg-slate-50">

            <ul className= {`${showMenu ? "flex h-[100vh]" : "hidden"} flex-col items-center justify-center bg-slate-50 w-full pb-5 sm:flex sm:relative sm:flex-row sm:pb-0 `}>
                <li>
                    <a href="#" className="inline-block py-2 mx-4 text-lg sm:py-0"> Accueil</a>
                </li>
                <li>
                    <a href="#" className="inline-block py-2 mx-4 text-lg sm:py-0"> Services</a>
                </li>
                <li>
                    <a href="#" className="inline-block py-2 mx-4 text-lg sm:py-0"> Projets</a>
                </li>
                <li>
                    <a href="#" className="inline-block py-2 mx-4 text-lg sm:py-0"> Contact</a>
                </li>
            </ul>
            <button
                onClick={() => {
                    setShowMenu(!showMenu)
                }}
                className="sm:hidden ml-auto absolute top-2 right-2"
            >
                <img 
                    src={showMenu ? close : hamburger} alt={showMenu ? "Cacher le menu" : "Afficher le menu"} 
                    className="text-4xl"
                />
                    
            </button>
        </nav>
  )
}
import Styles from "./Style.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { useGlobalContext } from "../../context/DarkModeContext"
import { ToastContainer, toast } from "react-toastify"
import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { AiOutlineAlignRight } from 'react-icons/ai'
import { useMediaQuery } from 'react-responsive'

const Navbar = () => {
  const { darkMode, setDarkMode } = useGlobalContext()
  const [menuBars, setMenuBars] = useState(false)
  const [menuActive, setMenuActive] = useState(false);
  const isMobile = useMediaQuery({maxWidth: '768px'})
  const [activePage, setActivePage] = useState('home');


  const showToast = () => {
    toast.success("We have updated your theme", {
      position: isMobile ? toast.POSITION.BOTTOM_CENTER : toast.POSITION.TOP_CENTER,
      autoClose: 1000,
    })
  }

  const handleDarkMode = () => {
    setDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode
      localStorage.setItem("dark", newDarkMode)
      showToast()
      return newDarkMode
    })
  }

  const handleMenuBarsMobile = () => {
    setMenuBars(!menuBars);
    setMenuActive(!menuActive);
  }


  return (
    <>
      <ToastContainer />
      <nav className={darkMode ? Styles.navDark : ""} id="myTopnav">
        <div className={Styles.logo}>
          <h2>Raden.</h2>
        </div>
        <div className={isMobile ? `${Styles.bars} ${darkMode ? Styles.darkBg : ""} ${menuActive ? Styles.menuActive : ""}` : Styles.menu}>
          <ul>
            <li style={{borderBottom: activePage == 'home' ? '2px solid': '', padding: activePage ? '10px' : ''}}>
              <a onClick={() => setActivePage('home')} href="#">
                Home
              </a>
            </li>
            <li style={{borderBottom: activePage == 'about' ? '2px solid': '', padding: activePage ? '10px' : ''}}>
              <a onClick={() => setActivePage('about')} href="#about">
                About
              </a>
            </li>
            <li style={{borderBottom: activePage == 'skills' ? '2px solid': '', padding: activePage ? '10px' : ''}}>
              <a onClick={() => setActivePage('skills')} href="#skills">
                Skills
              </a>
            </li>
            <li style={{borderBottom: activePage == 'porto' ? '2px solid': '', padding: activePage ? '10px' : ''}}>
              <a onClick={() => setActivePage('porto')} href="#porto">
                Portofolio
              </a>
            </li>
            <li style={{borderBottom: activePage == 'contact' ? '2px solid': '', padding: activePage ? '10px' : ''}}>
              <a onClick={() => setActivePage('contact')} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <input type="checkbox" checked={darkMode} readOnly></input>
        <div className={Styles.darkMode} onClick={handleDarkMode}>
          <div className={Styles.iconCheck}>
            <FontAwesomeIcon icon={darkMode ? faMoon : faSun} color="#fff" />
          </div>
        </div>
          <AiOutlineAlignRight className={Styles.menuBars} onClick={handleMenuBarsMobile}/>
      </nav>
    </>
  )
}

export default Navbar

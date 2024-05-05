import Styles from "./Style.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { useGlobalContext } from "../../context/DarkModeContext"
import { ToastContainer, toast } from "react-toastify"
import { useState } from "react"
import { AiOutlineAlignRight } from "react-icons/ai"
import { useMediaQuery } from "react-responsive"

const Navbar = () => {
  const { darkMode, setDarkMode } = useGlobalContext()
  const [menuBars, setMenuBars] = useState(false)
  const [menuActive, setMenuActive] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: "768px" })
  const [activePage, setActivePage] = useState("home")

  const showToast = () => {
    toast.success("We have updated your theme", {
      position: isMobile
        ? toast.POSITION.BOTTOM_CENTER
        : toast.POSITION.TOP_CENTER,
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
    setMenuBars(!menuBars)
    setMenuActive(!menuActive)
  }

  const handleActivePage = (page) => {
    setActivePage(page)
    setMenuBars(!menuBars)
    setMenuActive(!menuActive)
  }

  return (
    <>
      <ToastContainer />
      <nav className={darkMode ? Styles.navDark : ""} id="myTopnav">
        <div className={Styles.logo}>
          <h2>Raden.</h2>
        </div>
        <div
          className={
            isMobile
              ? `${Styles.bars} ${darkMode ? Styles.darkBg : ""} ${
                  menuActive ? Styles.menuActive : ""
                }`
              : Styles.menu
          }
        >
          <ul>
            <li
              style={{
                borderBottom: activePage == "home" ? "2px solid" : "",
                padding: activePage ? "10px" : "",
              }}
            >
              <a onClick={() => handleActivePage("home")} href="#">
                Home
              </a>
            </li>
            <li
              style={{
                borderBottom: activePage == "about" ? "2px solid" : "",
                padding: activePage ? "10px" : "",
              }}
            >
              <a onClick={() => handleActivePage("about")} href="#about">
                About
              </a>
            </li>
            <li
              style={{
                borderBottom: activePage == "skills" ? "2px solid" : "",
                padding: activePage ? "10px" : "",
              }}
            >
              <a onClick={() => handleActivePage("skills")} href="#skills">
                Skills
              </a>
            </li>
            <li
              style={{
                borderBottom: activePage == "porto" ? "2px solid" : "",
                padding: activePage ? "10px" : "",
              }}
            >
              <a onClick={() => handleActivePage("porto")} href="#porto">
                Portofolio
              </a>
            </li>
            <li
              style={{
                borderBottom: activePage == "contact" ? "2px solid" : "",
                padding: activePage ? "10px" : "",
              }}
            >
              <a onClick={() => handleActivePage("contact")} href="#contact">
                Contact
              </a>
            </li>
            <li
              style={{
                display: isMobile ? "block" : "none",
                borderRadius: "10px",
                backgroundColor: "#252529",
                width: "80%",
              }}
            >
              <input type="checkbox" checked={darkMode} readOnly></input>
              <div
                style={{
                  display: "flex",
                  paddingTop: "7px",
                  paddingBottom: "7px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  alignItems: "center",
                  gap: 5,
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontSize: "13px", color: "white" }}>Appearance</p>
                <div className={Styles.darkModeMobile} onClick={handleDarkMode}>
                  <div className={Styles.iconCheck}>
                    <FontAwesomeIcon
                      icon={darkMode ? faMoon : faSun}
                      color="#fff"
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <input type="checkbox" checked={darkMode} readOnly></input>
        <div
          style={{
            display: isMobile ? "none" : "block",
          }}
          className={Styles.darkMode}
          onClick={handleDarkMode}
        >
          <div className={Styles.iconCheck}>
            <FontAwesomeIcon icon={darkMode ? faMoon : faSun} color="#fff" />
          </div>
        </div>
        <AiOutlineAlignRight
          className={Styles.menuBars}
          onClick={handleMenuBarsMobile}
        />
      </nav>
    </>
  )
}

export default Navbar

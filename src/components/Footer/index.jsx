import "./style.scss"
import { useGlobalContext } from "../../context/DarkModeContext"

const Footer = () => {
  const { darkMode } = useGlobalContext()
  return (
    <>
      <footer>
        <div className={darkMode ? "wrapperF-dark" : "wrapperF"} style={{marginTop: '100px'}}>
          <h1>Raden.</h1>
          <h3>&copy; 2023-2025 Raden Rafly | All Right Reserved</h3>
        </div>
      </footer>
    </>
  )
}

export default Footer
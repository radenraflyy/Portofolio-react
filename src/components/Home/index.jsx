import { useGlobalContext } from "../../context/DarkModeContext"
import MyBg from "../../assets/my-bg.png"
import "./Style.scss"

const HomeComponent = () => {
  const { darkMode } = useGlobalContext()

  return (
    <>
      <div className={darkMode ? "container-dark" : "container"} id="home">
        <div className="image">
          <img src={MyBg} alt="..." />
        </div>
        <div className="title">
          <h1>I'm Software Engineer & Build Creative Products</h1>
          <button className="btn">Get In Touch</button>
        </div>
        <div className="footer">
          <div className="footer-left">
            <h2 className={darkMode ? "darks" : ""}>SCROLL</h2>
            <div className="line-left"></div>
          </div>
          <h3 className={darkMode ? "darks" : ""}>SCROLL</h3>
          <div className="line"></div>
        </div>
      </div>
    </>
  )
}

export default HomeComponent

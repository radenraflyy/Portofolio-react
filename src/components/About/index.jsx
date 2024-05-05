import "./style.scss"
import CardAbout from "./CardAbout"
import { useGlobalContext } from "../../context/DarkModeContext"
import { useMediaQuery } from "react-responsive"
import MyPhoto from "../../assets/photo-me.jpg"
import MyCv from "../../assets/CV-RadenRaflypradanakusumah.pdf"

const About = () => {
  const { darkMode } = useGlobalContext()
  const isMobile = useMediaQuery({ maxWidth: "452px" })

  return (
    <>
      <div className="wrapper" id="about">
        <div className={darkMode ? "container-dark" : "container"}>
          <CardAbout />
          <div className="container-about1" data-aos="zoom-in">
            <div className="my-image">
              <img src={MyPhoto} alt="..." />
            </div>
            <div className="about-me">
              <h3>About Me</h3>
              <div className="line"></div>
            </div>
            <div className="content-about">
              <h1 className={darkMode ? "contentH1" : ""}>Hi,I'm Rafly.</h1>
              <p className={darkMode ? "contentP" : ""}>
                Full Stack Developer experienced in maintaining software to make
                it fully functional. Combining my expertise in frontend and
                backend web development, I am able to build complete and
                customized web applications. that are complete and fit for
                purpose. I have in-depth knowledge of several programming
                languages and frameworks, as well as an understanding of full
                stack development. I always keep up with the latest technology
                and eager to apply it in my projects.
              </p>
              <div className="button-about">
                <button
                  style={{ width: isMobile ? "100%" : "" }}
                  className={darkMode ? "btndark1" : "btn1"}
                >
                  <a href="tel:+6283895938361" style={{ textDecoration: "none", color: "white" }}>Hire Me</a>
                </button>
                <button
                  style={{ width: isMobile ? "100%" : "" }}
                  className={darkMode ? "btndark2" : "btn2"}
                >
                  <a
                    href={MyCv}
                    download={"CV_Raden Rafly Pradana Kusumah.pdf"}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Download CV
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About

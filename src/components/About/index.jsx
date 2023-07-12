import "./style.scss"
import CardAbout from "./CardAbout"
import { useGlobalContext } from "../../context/DarkModeContext"
import { useMediaQuery } from "react-responsive"
import { useEffect } from "react"

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
                <img
                  src="https://images.unsplash.com/photo-1675347203088-351703ffbe7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80"
                  alt=""
                />
              </div>
              <div className="about-me">
                <h3>About Me</h3>
                <div className="line"></div>
              </div>
              <div className="content-about">
                <h1 className={darkMode ? "contentH1" : ""}>
                  Need a Creative Product? I Can Help You!
                </h1>
                <p className={darkMode ? "contentP" : ""}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  dolores odio eaque? Asperiores voluptatum ea iste, accusantium
                  rerum qui exercitationem, in cum reiciendis cupiditate nisi
                  rem perspiciatis error eius consequuntur. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Suscipit iusto quod
                  reprehenderit iste ratione, quae harum quibusdam debitis
                  asperiores corrupti assumenda illo non quisquam!
                  Exercitationem, ut. Quo quaerat cumque eos. Lorem ipsum dolor,
                  sit amet consectetur adipisicing elit. Ea sequi facilis
                  mollitia sed quia. Repudiandae totam perspiciatis id? Optio
                  incidunt officia maxime. Voluptates ratione autem praesentium
                  ad officiis repellat itaque?
                </p>
                <div className="button-about">
                  <button
                    style={{ width: isMobile ? "100%" : "" }}
                    className={darkMode ? "btndark1" : "btn1"}
                  >
                    Hire Me
                  </button>
                  <button
                    style={{ width: isMobile ? "100%" : "" }}
                    className={darkMode ? "btndark2" : "btn2"}
                  >
                    Download CV
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

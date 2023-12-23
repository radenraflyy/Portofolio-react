import "./style.scss"
import CardAbout from "./CardAbout"
import { useGlobalContext } from "../../context/DarkModeContext"
import { useMediaQuery } from "react-responsive"
import MyPhoto from "../../assets/photo-me.png"

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
              <h1 className={darkMode ? "contentH1" : ""}>
                Hi, I'm Raden Rafly.
              </h1>
              <p className={darkMode ? "contentP" : ""}>
                "In a rapidly changing world, the role of a software engineer
                serves as the foundation for boundless innovation. Every line of
                code we write is a step towards previously unimaginable
                solutions. From simplifying everyday life to reshaping how we
                interact with the world, your role holds an infinite impact.
                Stay passionate about solving problems because within each
                challenge lies a tremendous opportunity to grow and inspire. The
                world of technology is an endless field for learning, where we
                not only follow trends but also shape the future. Be part of a
                solid community, sharing knowledge and inspiring one another to
                reach unforeseen potential. Through our dedication as software
                engineers, we have the power to create extraordinary impact and
                change the world."
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

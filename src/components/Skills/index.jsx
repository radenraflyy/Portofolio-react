import { useGlobalContext } from "../../context/DarkModeContext"
import { useEffect, useState } from "react"
import Skills from "./Skills"
import Tools from "./Tools"
import "./style.scss"

const MySkills = () => {
  const { darkMode } = useGlobalContext()
  const [tab, setTab] = useState("skills")

  const handleChangeTab = (selectedTab) => {
    setTab(selectedTab)
  }

  return (
    <>
      <div
        style={{ marginTop: "100px" }}
        className={darkMode ? "container-dark" : "container"}
        id="skills"
      >
        <div className="container-skills">
          <div className="wrapper-skills" data-aos="fade-right">
            <div className="layout-content">
              <div className="step-skills">
                <div className="line"></div>
                <h3>MY SKILLS</h3>
              </div>
              <div className={darkMode ? "dark-content" : "content-skills"}>
                <h1>What My Programming Skills Includes?</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, delectus ab quidem maiores necessitatibus architecto
                  non id excepturi consequatur ducimus error quasi obcaecati
                  minima beatae repellat, sit inventore sed sint?
                </p>
              </div>
            </div>
            <div className="switch">
              <button
                className={`switch-button ${tab === "skills" ? "active" : ""}`}
                onClick={() => handleChangeTab("skills")}
                style={{color: darkMode ? '#f1f1f1' : ''}}
              >
                Skills
              </button>
              <button
                className={`switch-button ${tab === "tools" ? "active" : ""}`}
                onClick={() => handleChangeTab("tools")}
                style={{color: darkMode ? '#f1f1f1' : ''}}
              >
                Tools
              </button>
            </div>
          </div>
          {tab === "skills" ? <Skills /> : <Tools />}
        </div>
      </div>
    </>
  )
}

export default MySkills

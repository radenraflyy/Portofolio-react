import React, { useEffect, useState } from "react"
import "@fortawesome/fontawesome-svg-core/styles.css"
import "react-toastify/dist/ReactToastify.css"
import { motion, useScroll, useSpring } from "framer-motion"
import { FiArrowUpCircle } from "react-icons/fi"
import ScrollToTop from "react-scroll-to-top"
import styled from "styled-components"
import "./App.scss"
import "aos/dist/aos.css"
import AOS from "aos"
import Navbar from "./components/Navbar"
import HomePages from "./pages/Home"
import AboutPages from "./pages/About"
import Container from "./components/Container"
import Portofolio from "./pages/Portofolio"
import GlobalProvider from "./context/DarkModeContext"
import Skills from "./pages/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  const [title, setTitle] = useState("My Portofolio 👩‍🚀")
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    document.title = title
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        document.title = "Come Back 😒"
      } else {
        document.title = title
      }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange)
  }, [title])

  useEffect(() => {
    AOS.init({ duration: 1200 })
  }, [])

  const CustomScrollToTop = styled(ScrollToTop)`
    background-color: #fff;
    width: 50px;
    height: 50px;
    right: 12px;
    bottom: 10px;
  `

  return (
    <React.Fragment>
      <GlobalProvider>
        <motion.div className="progress-bar" style={{ scaleX }} />
        <Navbar />
        <Container>
          <HomePages />
          <AboutPages />
          <Skills />
          <Portofolio />
          <Contact />
        </Container>
        <Footer />
      </GlobalProvider>
      <CustomScrollToTop
        smooth
        component={
          <FiArrowUpCircle
            style={{
              fontSize: "28px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto",
            }}
          />
        }
      />
    </React.Fragment>
  )
}

export default App

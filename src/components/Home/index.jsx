import {useState, useEffect} from 'react'
import { useGlobalContext } from '../../context/DarkModeContext'
import "./Style.scss"

const HomeComponent = () => {
  const {darkMode} = useGlobalContext()

  return (
    <>
      <div className={darkMode ? 'container-dark' : 'container'} id="home">
        <div className="image">
        <img src="https://images.unsplash.com/photo-1498019559366-a1cbd07b5160?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1158&q=80" alt="My Image" />
        </div>
        <div className="title">
          <h1>I'm Software Engineer & Build Creative Products</h1>
          <button className="btn">
            Get In Touch
          </button>
        </div>
        <div className="footer">
          <div className="footer-left">
            <h2 className={darkMode ? 'darks' : ''}>SCROLL</h2>
            <div className="line-left"></div>
          </div>
          <h3 className={darkMode ? 'darks' : ''}>SCROLL</h3>
          <div className="line"></div>
        </div>
      </div>
    </>
  )
}

export default HomeComponent
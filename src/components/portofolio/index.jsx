import { useEffect } from "react";
import { useGlobalContext } from "../../context/DarkModeContext"
import "./style.scss"
const CWork = () => {
  const { darkMode } = useGlobalContext()

  
  return (
    <>
      <div className={darkMode ? "container-dark" : "container"} style={{marginTop: '100px'}} id="porto">
        <div className="wrapper-cwork">
          <div className="title">
            <h3>My Works</h3>
            <div className="line"></div>
          </div>
          <div className={ darkMode ? "dark-text" : "image-porto"}>
            <h1 data-aos="fade-down-right">See My Works Which Will Amaze You!</h1>
            <p data-aos="fade-down-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              est iusto asperiores tempore unde at ipsam illo veniam! Eius
              architecto eum quae itaque maiores voluptatibus dolores ratione
              quidem voluptate deserunt.
            </p>
            <img
              src="https://images.unsplash.com/photo-1495462911434-be47104d70fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
              width="100%"
              data-aos="fade-down-right"
            />
            <img
              src="https://images.unsplash.com/uploads/141263540336471bc6892/29320bb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80"
              width="100%"
              data-aos="fade-down-right"
            />
          </div>
          <div className="image-porto">
            <img
              src="https://images.unsplash.com/photo-1487613758092-1e1d1587fb15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              width="100%"
              data-aos="fade-up"
            />
            <img
              src="https://images.unsplash.com/photo-1498878256124-0c5d71b3e26c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              width="100%"
              data-aos="fade-up"
            />
            <img
              src="https://images.unsplash.com/photo-1485651913874-ddde917d43e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1311&q=80"
              width="100%"
              data-aos="fade-up"
            />
            <img src="https://images.unsplash.com/photo-1471606467242-7e85c78921b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
            width="100%"  
            data-aos="fade-up"
            />
          </div>
          <div className="image-porto">
            <img
              src="https://images.unsplash.com/photo-1496205856088-91b021308c54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1120&q=80"
              width="100%"
              data-aos="zoom-in-right"
            />
            <img
              src="https://images.unsplash.com/photo-1485304018316-1ff471aa1369?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              width="100%"
              data-aos="zoom-in-right"
            />
            <img
              src="https://images.unsplash.com/photo-1556195332-95503f664ced?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80"
              width="100%"
              data-aos="zoom-in-right"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default CWork

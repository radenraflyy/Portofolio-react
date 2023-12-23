import { useGlobalContext } from "../../context/DarkModeContext"
import absensiSiswa from "../../assets/absensi-siswa.png"
import askDev from "../../assets/askdev.png"
import drumKit from "../../assets/drum-kit.png"
import ecommerce from "../../assets/ecommerce.png"
import fieldtrack from "../../assets/fieldtrack.png"
import hooBank from "../../assets/HooBank.png"
import portofolio from "../../assets/portofolio.png"
import simpleEcomerce from "../../assets/simple-ecomerce.png"
import tjampakaMulia from "../../assets/tjampaka-mulia.png"

import "./style.scss"
const CWork = () => {
  const { darkMode } = useGlobalContext()

  return (
    <>
      <div
        className={darkMode ? "container-dark" : "container"}
        style={{ marginTop: "100px" }}
        id="porto"
      >
        <div className="wrapper-cwork">
          <div className="title">
            <h3>Projects</h3>
            <div className="line"></div>
          </div>
          <div className={darkMode ? "dark-text" : "image-porto"}>
            <h1 data-aos="fade-down-right">See My Projects</h1>
            <p data-aos="fade-down-right" style={{ fontSize: "20px", fontWeight: 600 }}>
              Some collection of my past works.
            </p>
            <img src={tjampakaMulia} width="100%" data-aos="fade-down-right" />
          </div>
          <div className="image-porto">
            <img src={askDev} width="100%" data-aos="fade-up" />
            <img src={drumKit} width="100%" data-aos="fade-up" />
            <img src={absensiSiswa} width="100%" data-aos="zoom-in-right" />
            <img src={fieldtrack} width="100%" data-aos="fade-up" />
          </div>
          <div className="image-porto">
            <img src={hooBank} width="100%" data-aos="zoom-in-right" />
            <img src={portofolio} width="100%" data-aos="zoom-in-right" />
            <img src={simpleEcomerce} width="100%" data-aos="zoom-in-right" />
            <img src={ecommerce} width="100%" data-aos="fade-up" />
          </div>
        </div>
      </div>
    </>
  )
}

export default CWork

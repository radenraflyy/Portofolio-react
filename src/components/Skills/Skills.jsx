import "./skills.scss"
import {
  FaReact,
  FaVuejs,
  FaHtml5,
  FaCss3,
  FaPhp,
  FaNeos,
  FaBootstrap,
  FaSass,
  FaLaravel,
  FaDatabase,
  FaNodeJs,
} from "react-icons/fa"
import { SiDart, SiFlutter, SiTailwindcss, SiAntdesign, SiRedux, SiExpress, SiAdonisjs, SiTypescript } from "react-icons/si"
import { TbBrandReactNative } from "react-icons/tb"
const Skills = () => {
  return (
    <div className="cotainer-skillC" data-aos="zoom-in">
      <div className="wrapper-skillC">
        <FaHtml5 color="red" />
      </div>
      <div className="wrapper-skillC">
        <FaCss3 color="blue" />
      </div>
      <div className="wrapper-skillC">
        <FaPhp color="#18398b" />
      </div>
      <div className="wrapper-skillC">
        <FaNodeJs color="yellow" />
      </div>
      <div className="wrapper-skillC">
        <FaBootstrap color="#1759ff" />
      </div>
      <div className="wrapper-skillC">
        <SiTailwindcss color="#56b0ff" />
      </div>
      <div className="wrapper-skillC">
        <SiAntdesign color="#56b0ff" />
      </div>
      <div className="wrapper-skillC">
        <FaReact color="#56b0ff" />
      </div>
      <div className="wrapper-skillC">
        <FaVuejs color="green " />
      </div>
      <div className="wrapper-skillC">
        <FaSass color="pink" />
      </div>
      <div className="wrapper-skillC">
        <FaLaravel color="red" />
      </div>
      <div className="wrapper-skillC">
        <FaDatabase color="#013e73" />
      </div>
      <div className="wrapper-skillC">
        <FaNeos color="black" />
      </div>
      <div className="wrapper-skillC">
        <SiExpress color="black" />
      </div>
      <div className="wrapper-skillC">
        <SiAdonisjs color="#764abc" />
      </div>
      <div className="wrapper-skillC">
        <SiDart color="blue" />
      </div>
      <div className="wrapper-skillC">
        <SiFlutter color="#56b0ff" />
      </div>
      <div className="wrapper-skillC">
        <TbBrandReactNative color="#56b0ff" />
      </div>
      <div className="wrapper-skillC">
        <SiRedux color="#764abc" />
      </div>
      <div className="wrapper-skillC">
        <SiTypescript color="#3178c6" />
      </div>
    </div>
  )
}

export default Skills

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArchive, faCheckToSlot, faPeopleGroup } from "@fortawesome/free-solid-svg-icons"
import "./cardAbout.scss"
import { motion } from 'framer-motion'

const CardAbout = () => {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <div className="container-about">
        <div className="wrapper-about">
          <div className="icon">
            <FontAwesomeIcon icon={faArchive} color="#dda200"/>
          </div>
          <div className="content">
            <h1>3+</h1>
            <p>Years Of Experience</p>
          </div>
          <div className="row">
            <h3 style={{color: '#bbb', fontSize: '25px'}}>></h3>
          </div>
        </div>
        <div className="wrapper-about">
          <div className="icon">
            <FontAwesomeIcon icon={faCheckToSlot} color="#dda200"/>
          </div>
          <div className="content">
            <h1>51+</h1>
            <p>Completed Projects</p>
          </div>
          <div className="row">
            <h3 style={{color: '#bbb', fontSize: '25px'}}>></h3>
          </div>
        </div>
        <div className="wrapper-about">
          <div className="icon">
            <FontAwesomeIcon icon={faPeopleGroup} color="#dda200"/>
          </div>
          <div className="content">
            <h1>5+</h1>
            <p style={{padding: '0 25px'}}>Happy Client</p>
          </div>
          <div className="row">
            <h3 style={{color: '#bbb', fontSize: '25px'}}>></h3>
          </div>
        </div>
      </div>
    </motion.div>
    </>
  )
}

export default CardAbout

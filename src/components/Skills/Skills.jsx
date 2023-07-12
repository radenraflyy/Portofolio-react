import './skills.scss'
import { FaReact, FaVuejs, FaHtml5, FaCss3, FaPhp, FaNeos, FaBootstrap, FaSass, FaLaravel, FaNpm, FaDatabase, FaNodeJs} from 'react-icons/fa'
const Skills = () => {
  return (
    <div className='cotainer-skillC' data-aos="zoom-in">
      <div className='wrapper-skillC'>
        <FaHtml5 color='red'/>
      </div>
      <div className='wrapper-skillC'>
        <FaCss3 color='blue'/>
      </div>
      <div className='wrapper-skillC'>
        <FaPhp color='#18398b'/>
      </div>
      <div className='wrapper-skillC'>
        <FaNodeJs color='yellow'/>
      </div>
      <div className='wrapper-skillC'>
        <FaBootstrap color='#1759ff'/>
      </div>
      <div className='wrapper-skillC'>
        <FaReact color='#56b0ff'/>
      </div>
      <div className='wrapper-skillC'>
        <FaVuejs color='green '/>
      </div>
      <div className='wrapper-skillC'>
        <FaSass color='pink'/>
      </div> 
      <div className='wrapper-skillC'>
        <FaLaravel color='red'/>
      </div>
      <div className='wrapper-skillC'>
        <FaNpm color='red'/>
      </div>
      <div className='wrapper-skillC'>
        <FaDatabase color='#013e73'/>
      </div>
      <div className='wrapper-skillC'>
        <FaNeos color='black'/>
      </div>
    </div>
  )
}

export default Skills
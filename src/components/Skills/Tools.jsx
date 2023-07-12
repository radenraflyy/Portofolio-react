import './skills.scss'
import { FaGit, FaGithub, FaGitlab, FaChrome, FaSpotify, FaCoffee, FaNpm, FaWhatsapp} from 'react-icons/fa'
const Tools = () => {
  return (
    <div className='cotainer-skillC' data-aos="zoom-in">
      <div className='wrapper-skillC'>
        <FaChrome color='black'/>
      </div>
      <div className='wrapper-skillC'>
        <FaGitlab color='orange'/>
      </div>
      <div className='wrapper-skillC'>
        <FaGit color='#000'/>
      </div>
      <div className='wrapper-skillC'>
        <FaGithub color='black '/>
      </div>
      <div className='wrapper-skillC'>
        <FaWhatsapp color='green'/>
      </div> 
      <div className='wrapper-skillC'>
        <FaSpotify color='green'/>
      </div>
      <div className='wrapper-skillC'>
        <FaCoffee color='brown'/>
      </div>
    </div>
  )
}

export default Tools
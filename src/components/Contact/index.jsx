import { useGlobalContext } from "../../context/DarkModeContext"
import "./style.scss"
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaLocationArrow,
  FaSpotify,
} from "react-icons/fa"
import { useForm, ValidationError } from "@formspree/react"
import { ToastContainer, toast } from "react-toastify"
import { useEffect } from "react"

const Contact = () => {
  const { darkMode } = useGlobalContext()
  const [state, handleSubmit] = useForm("meqbqpdq")

  const NotifiCationSuccess = () => {
    toast.success("Thank You! Your Message Has Been Successfully Send.", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
    })
  }

  useEffect(() => {
    if (state.succeeded) {
      NotifiCationSuccess()
    }
    console.log(state)
  }, [handleSubmit])

  return (
    <>
      <ToastContainer />
      <div
        className={darkMode ? "container-dark" : "container"}
        style={{ marginTop: "100px" }}
        id="contact"
      >
        <div className="title-contact">
          <h3>Contact</h3>
          <div className="line"></div>
        </div>
        <div className="wrapper-contact">
          <div
            className="content-left"
            style={{ color: darkMode ? "#fff" : "" }}
            data-aos="zoom-in-right"
          >
            <h1>Let's Connect and Collaborate!</h1>
            <p>
              I'm always eager to connect with everyone, so don't hesitate to
              contact me
            </p>
            <div className="address">
              <div className="iconA">
                <h3>
                  <FaLocationArrow />
                </h3>
              </div>
              <div className="detaiA">
                <h3>Address : </h3>
                <p className="contentA">
                  Jl Raya Puncak Cipayung Datar. Kabupaten Bogor, Kec.
                  Megamendung, Desa Cipayung.
                </p>
              </div>
            </div>

            <div className="address">
              <div className="iconA">
                <h3>
                  <FaPhone />
                </h3>
              </div>
              <div className="detaiA">
                <h3>Phone : </h3>
                <p className="contentA">(01) 234 567 789</p>
                <p className="contentA">(01) 234 567 789</p>
              </div>
            </div>

            <div className="address">
              <div className="iconA">
                <h3>
                  <FaMailBulk />
                </h3>
              </div>
              <div className="detaiA">
                <h3>Email : </h3>
                <a
                  className="contentE"
                  style={darkMode ? { color: "#fff" } : { color: "#000" }}
                  href="mailto:radenraflypradanakusumah@gmail.com"
                >
                  radenraflypradanakusumah@gmail.com
                </a>
              </div>
            </div>

            <div className="sosmed">
              <a
                className={darkMode ? "dark-bg" : "bg-sosmed"}
                href="https://github.com/radenraflyy"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                className={darkMode ? "dark-bg" : "bg-sosmed"}
                href="https://www.instagram.com/radenraflypdk"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                className={darkMode ? "dark-bg" : "bg-sosmed"}
                href="https://www.linkedin.com/in/raden-rafly-pradana-kusumah-108334220/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                className={darkMode ? "dark-bg" : "bg-sosmed"}
                href="https://open.spotify.com/user/1wrbsxwjqhko82iwhk9r10y8s?si=3f8270b548a74f1e"
                target="_blank"
                rel="noreferrer"
              >
                <FaSpotify />
              </a>
            </div>
          </div>
          <div className="wrapper-form" data-aos="zoom-in">
            <form onSubmit={handleSubmit}>
              <label htmlFor="Name">Name</label>
              <textarea
                id="name"
                name="Name"
                type="text"
                placeholder="Raden Rafly"
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />

              <label htmlFor="Email">Email</label>
              <textarea
                id="email"
                name="Email"
                type="email"
                placeholder="raden@gmail.com"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <label htmlFor="Number">Phone</label>
              <textarea
                id="number"
                name="Number"
                type="number"
                placeholder="0838-9593-8391"
                required
              />
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
              />

              <label htmlFor="Name">Message</label>
              <textarea
                id="message"
                name="Message"
                type="text"
                style={{ height: "100px" }}
                placeholder="Hi Raden."
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <button type="submit" disabled={state.submitting}>
                {state.submitting ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact

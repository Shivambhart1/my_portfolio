import "./ContactMe.css";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa/index";

const ContactMe = () => {
  return (
    <div className="MainContactMeComponent">
      <div className="ContactMeHeading">
        <h1>CONTACT ME</h1>
      </div>
      <div className="icons">
        <a
          href="https://github.com/Shivambhart1"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={35} />
        </a>
        <a
          href="https://www.linkedin.com/in/shivam-bharti-6948b022a/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={35} />
        </a>
        <a
          href="https://twitter.com/ShivamB11888392"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter size={35} />
        </a>
        <a
          href="https://www.instagram.com/throws_exceptions/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram size={35} />
        </a>
      </div>
    </div>
  );
};

export default ContactMe;

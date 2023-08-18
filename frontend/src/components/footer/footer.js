import "./footer.css"
import { FaGithub } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { MdMail } from "react-icons/md"

const Footer = () => {
    return (
        <div class="footer">
            <a href="https://github.com/mishkebab" class="icon"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/mishabansal/" class="icon"><FaLinkedinIn /></a>
            <a href="" class="icon"><MdMail /></a>
        </div>
    )
}

export default Footer;
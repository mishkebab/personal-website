import "./footer.css"
import { FaGithub } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { MdMail } from "react-icons/md"

const Footer = () => {
    return (
        <div class="footer">
            <span class="icon"><FaGithub /></span>
            <span class="icon"><FaLinkedinIn /></span>
            <span class="icon"><MdMail /></span>
        </div>
    )
}

export default Footer;
import "./projects.css"
import Footer from "../footer/footer";
import ScrollImage from "../../assets/scroll-front-image.png"
import RendezImage from "../../assets/rendezview-front-image.png"


const Projects = () => {
    return (
        <div class="projects">
            <p>
                <a href="https://misha-scroll-a1d0e552b8c2.herokuapp.com/" class="navbar-menu-link" target="_blank">Scroll</a>
                : Harry Potter themed fullstack clone of the business messaging app Slack
            </p>
            <br />
            <img src={ScrollImage}/>
            <br />
            <p>
                <a href="https://smelk.onrender.com/" class="navbar-menu-link" target="_blank">RendezView</a>
                : Simplifies planning events for friends
            </p>
            <br />
            <img src={RendezImage}/>
            <br />
            <Footer />
        </div>
    )
}

export default Projects;
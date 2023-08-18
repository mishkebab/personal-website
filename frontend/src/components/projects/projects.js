import "./projects.css"
import Footer from "../footer/footer";

const Projects = () => {
    return (
        <div class="projects">
            <p>
                <a href="https://misha-scroll-a1d0e552b8c2.herokuapp.com/" class="navbar-menu-link" target="_blank">Scroll</a>
                : Harry Potter themed fullstack clone of the business messaging app Slack
            </p>
            <br />
            <p>
                <a href="https://smelk.onrender.com/" class="navbar-menu-link" target="_blank">RendezView</a>
                : Simplifies planning events for friends
            </p>
            <br />
            <Footer />
        </div>
    )
}

export default Projects;
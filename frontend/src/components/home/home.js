import "./home.css"
import Footer from "../footer/footer";

const Home = () => {
    return (
        <div class="home">
            <p>Software engineer working on problems. </p>
            <br />
            <p>Past gigs:</p>
            <ul>
                <li>Senior Solutions Engineer at <a class="navbar-menu-link" href="https://orbitalinsight.com/">Orbital Insight</a> <span role="img" aria-label="dog">🌎</span></li>
                <li>VC at <a class="navbar-menu-link" href="https://www.scalevp.com/">Scale Venture Partners</a> <span role="img" aria-label="dog">🤑</span></li>
                
                <li>Student at Princeton University <span role="img" aria-label="dog">🐯</span></li>
            </ul>
            <br />
            <Footer />
        </div>
    )
}

export default Home;
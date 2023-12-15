import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Skill from "../Skill/Skill";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div id="about"><About></About></div>
            <Skill></Skill>
            <div id="project"><Projects></Projects></div>
            <div id="contact"><Contact></Contact></div>
            <Footer></Footer>
        </div>
    );
};

export default Home;
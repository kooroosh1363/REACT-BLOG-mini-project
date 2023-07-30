import Navbar from "../../components/navbar/Navbar";
import styled from "./About.module.css";
import Article from "../../assets/image/article.gif";
import Footer from "../../components/footer/Footer";

function AboutUs() {
    return (
        <div>
            <Navbar title='RAAD BLOG' />
            <div className={styled.aboutPage}>

                <div className="container">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eum asperiores molestias id eos nihil saepe, perspiciatis molestiae beatae doloremque magni possimus deleniti quo ea enim aliquam et reiciendis facere. Odit adipisci incidunt delectus nihil mollitia doloribus impedit nemo voluptate? Expedita doloribus atque at iure placeat inventore nostrum veritatis eos modi, rerum deserunt reiciendis voluptate ipsa quis dicta neque quisquam.</p>


                    <img src={Article} alt="article" />
                </div>
            </div>
            <Footer/>
        </div>





    )
}

export default AboutUs;
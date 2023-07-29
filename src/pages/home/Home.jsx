import Article from "../../components/Article/Article";
import Navbar from "../../components/navbar/Navbar";
import styled from "./Home.module.css";



function Home() {


    return (

        <div className={styled.homeWrapper}>
            <Navbar title='RAAD BLOG' />

            <div className="container">
                <h2>New Articles :</h2>
                <div className={styled.articles}>
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                </div>

            </div>
        </div>

    )
}


export default Home;
import Article from "../../components/Article/Article";
import Navbar from "../../components/navbar/Navbar";
import styled from "./Home.module.css";



function Home() {

    let articles = [
        {
            id: 1,
            imageUlr: "",
            title: "first title",
            readingTime: 5
        },
        {
            id: 2,
            imageUlr: "",
            title: "sec title",
            readingTime: 4
        },
        {
            id: 3,
            imageUlr: "",
            title: "third title",
            readingTime: 3
        },
        {
            id: 4,
            imageUlr: "",
            title: "forth title",
            readingTime: 3
        },
    ]

    return (

        <div className={styled.homeWrapper}>
            <Navbar title='RAAD BLOG' />

            <div className="container">
                <h2>New Articles :</h2>
                <div className={styled.articles}>
                    {
                        articles.map((article) =>(
                            <Article />
                        ))
                    }


                    
                    
                </div>

            </div>
        </div>

    )
}


export default Home;
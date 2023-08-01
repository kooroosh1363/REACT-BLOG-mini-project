import { useEffect, useState } from "react";
import Article from "../../components/Article/Article";
import Navbar from "../../components/navbar/Navbar";
import styled from "./Home.module.css";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

function Home() {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        // API call
        axios.get("http://localhost:8000/articles").then((result) => {

            setArticles(result.data.data);


            console.log(result.data.data);
        })
        .catch((error) => {
            console.log(error);
        });

    }, []);

    return (

        <div className={styled.homeWrapper}>
            <Navbar title='RAAD BLOG' />

            <div className="container">
                <h2>New Articles :</h2>
                <div className={styled.articles}>
                    {
                        articles.map((article) => (
                            <Link to={`/article/${article.id}`}>
                                <Article key={article.id} articleData={article} />
                            </Link>
                        ))
                    }




                </div>

            </div>

            <Footer />
        </div>

    )
}


export default Home;
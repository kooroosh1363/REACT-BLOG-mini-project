import { useEffect, useState } from "react";
import Article from "../../components/Article/Article";
import Navbar from "../../components/navbar/Navbar";
import styled from "./Home.module.css";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import ArticleSin from "../singleArticle/ArticleSin";
import Spinner from "../../components/spinner/spinner";

function Home() {

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        // API call
        setIsLoading(true)
        axios.get("http://localhost:8000/articles").then((result) => {

            setArticles(result.data);
            setIsLoading(false)

            // console.log(result.data.data);
        })
            .catch((error) => {
                console.log(error);
                setIsLoading(false)

            });

    }, []);

    return (

        <div className={styled.homeWrapper}>
            <Navbar title='RAAD BLOG' />
            
            <div className="container">
                <h2>New Articles :</h2>

                {
                    isLoading ? <Spinner/> : (<div className={styled.articles}>
                        {
                            articles.map((article) => (
                                <Link to={`/article/${article.id}`}>
                                    <Article key={article.id} articleData={article} />
                                </Link>
                            ))
                        }




                    </div>)
                }





            </div>

            <Footer />
        </div>

    )
}


export default Home;
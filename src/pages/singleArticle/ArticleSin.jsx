import Navbar from "../../components/navbar/Navbar";
import styled from "./ArticleSin.module.css";
// import img from "../../assets/image/article.gif";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/spinner/spinner";



function ArticleSin() {

    const [article, setArticle] = useState({});

    const [isLoading, setIsLoading] = useState(false)

    // http://localhost:8000/articles/1

    const params = useParams()

    useEffect(() => {
        setIsLoading(true)
        axios.get(`http://localhost:8000/articles/${params.id}`).then((result) => {
            // console.log(result.data);
            setArticle(result.data);
            setIsLoading(false)
        })
            .catch((error) => {
                console.log(error);
                setIsLoading(false)

            });


    }, [params.id]);

    return (
        <div>
            <Navbar title='RAAD BLOG' />

            <div className={styled.articleWrapper}>
                <div className="container">

                    {
                        isLoading ? <Spinner/> : (
                            <>
                                <h1>{article.title}</h1>
                                <div className={styled.articleInfo}>
                                    <span>Date:{article.date}</span>
                                    <span>Author:{article.Author}</span>
                                    <span>Time For Reading: {article.readingTime}</span>
                                </div>

                                <img src={article.imageUlr} alt="" />

                                <p>{article.content} </p>
                            </>
                        )
                    }
                </div>
            </div>


            <Footer />
        </div>

    )
}


export default ArticleSin;
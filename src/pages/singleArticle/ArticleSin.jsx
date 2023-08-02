import Navbar from "../../components/navbar/Navbar";
import styled from "./ArticleSin.module.css";
// import img from "../../assets/image/article.gif";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";



function ArticleSin() {

    const [article, setArticle] = useState({});


    const params = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/articles/${params.id}`).then((result) => {

            setArticle(result.data);
            console.log(result.data)
        })
            .catch((error) => {
                console.log(error);
            });


    }, [params.id]);

    return (
        <div>
            <Navbar title='RAAD BLOG' />

            <div className={styled.articleWrapper}>
                <div className="container">
                    <h1>{article.title}</h1>
                    <div className={styled.articleInfo}>
                        <span>Date:{article.date}</span>
                        <span>Author:{article.Author}</span>
                        <span>Time For Reading: {article.readingTime}</span>
                    </div>

                    <img src={article.imageUlr} alt="" />

                    <p>{article.content} </p>
                </div>
            </div>


            <Footer />
        </div>

    )
}


export default ArticleSin;
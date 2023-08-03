import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import styled from "./newArticles.module.css";
function NewArticles() {
    
    const [articles, setArticles] = useState({
        title: "",
        date: "",
        readingTime:"",
        author:"",
    });

    const onHandleArticle = (e) => {
        setArticles((pervState) =>({
            ...pervState,
            [e.target.name]:e.target.value,
        }));
    };
    console.log(articles);

    return (
        <div>
            <Navbar title='RAAD BLOG' />

            <div className={styled.createArticlePage}>
                <div className="container">
                    <h1>create article :</h1>
                    <div className={styled.inputWrapper}>
                        <label>Title</label>
                        <input name="title" onChange={onHandleArticle} type="text" />
                    </div>

                    <div className={styled.inputWrapper}>
                        <label>Date</label>
                        <input name="date" onChange={onHandleArticle} type="text" />
                    </div>

                    <div className={styled.inputWrapper}>
                        <label>Time For Reading :</label>
                        <input name="readingTime" onChange={onHandleArticle} type="text" />
                    </div>

                    <div className={styled.inputWrapper}>
                        <label>Author</label>
                        <input name="author" onChange={onHandleArticle} type="text" />
                    </div>

                </div>
            </div>

        </div>
    );
}

export default NewArticles;
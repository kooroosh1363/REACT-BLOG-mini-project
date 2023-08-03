import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import styled from "./newArticles.module.css";
import Input from "../../components/input/input";
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
        <>
            <Navbar title='RAAD BLOG' />

            <div className={styled.createArticlePage}>
                <div className="container">
                    <h1>create article :</h1>
                    <Input label="Title:" name="title" placeHolder="name's article..." handleChange={onHandleArticle}/>
                    <Input label="Date:" name="date" placeHolder="0000/00/00" handleChange={onHandleArticle}/>
                    <Input label="ReadingTime:" name="readingTime" placeHolder="00 min" handleChange={onHandleArticle}/>
                    <Input label="Author:" name="author" placeHolder="john doe" handleChange={onHandleArticle}/>

                </div>
            </div>

        </>
    );
}

export default NewArticles;
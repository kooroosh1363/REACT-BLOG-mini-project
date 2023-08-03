import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import styled from "./newArticles.module.css";
import Input from "../../components/input/input";
import TextArea from "../../components/textarea/TextArea";
import Footer from "../../components/footer/Footer";
import axios from "axios";
function NewArticles() {

    const [articles, setArticles] = useState({
        title: "",
        date: "",
        readingTime: "",
        author: "",
        imageUrl: "",
        text: "",
    });

    const onHandleArticle = (e) => {
        setArticles((pervState) => ({
            ...pervState,
            [e.target.name]: e.target.value,
        }));
    };



    const onHandleText = (e) => {
        setArticles((pervState) => ({
            ...pervState,
            text: e.target.value,
        }));
    };


    const sendNewArticle = () => {
        axios.post("http://localhost:8000/articles",
            {
                id:9 ,
                imageUlr: articles.imageUrl,
                title: articles.title,
                readingTime: articles.readingTime,
                date: articles.date,
                Author: articles.author,
                content: articles.text,
            });
    };


    // console.log(articles);

    return (
        <>
            <Navbar title='RAAD BLOG' />

            <div className={styled.createArticlePage}>
                <div className="container">
                    <h1>Create Article :</h1>
                    <Input label="Title:" name="title" placeHolder="name's article..." handleChange={onHandleArticle} type="text" />
                    <Input label="Date:" name="date" placeHolder="0000/00/00" handleChange={onHandleArticle} type="text" />
                    <Input label="ReadingTime:" name="readingTime" placeHolder="00 min" handleChange={onHandleArticle} type="text" />
                    <Input label="Author:" name="author" placeHolder="john doe" handleChange={onHandleArticle} type="text" />
                    <Input label="AddImage:" name="imageUrl" handleChange={onHandleArticle} type="text" />
                    <TextArea label="Text:" handleChange={onHandleText} />

                    <div className={styled.buttonWrapper}>
                        <button onClick={sendNewArticle}>Send Article</button>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    );
}

export default NewArticles;
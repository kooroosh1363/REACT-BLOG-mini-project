import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import styled from "./newArticles.module.css";
function NewArticles() {
    // const [counter, setCounter] = useState(0);

    // const increaseToCounter = () =>{
    //     setCounter(counter + 1)
    // }

    // const decreaseToCounter = () =>{
    //     setCounter(counter - 1)
    // }
    const [articles, setArticles] = useState({
        title:"",
        date:""
    });

    const onHandleArticle = (e) => {
        // setArticlesTitle(e.target.name, e.target.value)
        // console.log(e.target.name, e.target.value)

        switch (e.target.name) {
            case "title":
                setArticles({
                    title:e.target.value
                })
                break;

            case "date":
                setArticles({
                    date:e.target.value
                })
                break;
        }
    };
    console.log(articles);

    return (
        <div>
            <Navbar title='RAAD BLOG' />

            <div className={styled.createArticlePage}>
                <div className="container">
                    <h1>create article :</h1>

                    {/* <button onClick={increaseToCounter}>increase</button>
                    <span>{counter}</span>
                    <button onClick={decreaseToCounter}>decrease</button> */}
                    <div className={styled.inputWrapper}>
                        <label>title</label>
                        <input name="title" onChange={onHandleArticle} type="text" />
                    </div>

                    <div className={styled.inputWrapper}>
                        <label>date</label>
                        <input name="date" onChange={onHandleArticle} type="text" />
                    </div>

                </div>
            </div>

        </div>
    );
}

export default NewArticles;
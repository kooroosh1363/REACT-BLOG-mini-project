import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import styled from "./newArticles.module.css";
function NewArticles(){
    const [counter, setCounter] = useState(0);

    const increaseToCounter = () =>{
        setCounter(counter + 1)
    }

    const decreaseToCounter = () =>{
        setCounter(counter - 1)
    }

    return(
        <div>
            <Navbar title='RAAD BLOG'/>

            <div className={styled.createArticlePage}>
                <div className="container">
                    <h1>create article :</h1>

                    <button onClick={increaseToCounter}>increase</button>
                    <span>{counter}</span>
                    <button onClick={decreaseToCounter}>decrease</button>

                </div>
            </div>

        </div>
    );
}

export default NewArticles;
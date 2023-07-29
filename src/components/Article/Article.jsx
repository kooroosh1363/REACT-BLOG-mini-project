import styled from "./Article.module.css";
import article from "../../assets/image/article.gif";

function Article(){


    return(
        <div className={styled.articleWrapper}>
            <img src={article}  />

            <h3>Lorem ipsum dolor sit amet...</h3>
            <span>read article in 5 min</span>

        </div>
    );
}


export default Article;
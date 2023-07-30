import styled from "./Article.module.css";
import article from "../../assets/image/article.gif";

function Article(props){

    // console.log(props.articleData.title);
    return(
        <div className={styled.articleWrapper}>
            <img src={props.articleData.imageUlr}  />

            <h3>{props.articleData.title}</h3>
            <span>read article in {props.articleData.readingTime} min</span>

        </div>
    );
}


export default Article;
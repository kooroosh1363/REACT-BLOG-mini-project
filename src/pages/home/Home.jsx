import Article from "../../components/Article/Article";
import Navbar from "../../components/navbar/Navbar";
import styled from "./Home.module.css";



function Home() {

    let articles = [
        {
            id: 1,
            imageUlr: "https://i.pinimg.com/originals/2f/ab/f3/2fabf3ceb5a35b51a70e27137d56e4d2.gif",
            title: "first title",
            readingTime: 5
        },
        {
            id: 2,
            imageUlr: "https://media.licdn.com/dms/image/D4D12AQFWvaMwVQ9BZg/article-cover_image-shrink_720_1280/0/1684837085609?e=2147483647&v=beta&t=e64tRuZBFjDZLmAykvFyxeSrCEBrOrZCfTJN7EFizVk",
            title: "sec title",
            readingTime: 4
        },
        {
            id: 3,
            imageUlr: "https://i.pinimg.com/originals/bb/d7/cd/bbd7cd62c9f1f6778e91b11a71874ab6.gif",
            title: "third title",
            readingTime: 3
        },
        {
            id: 4,
            imageUlr: "https://i.pinimg.com/originals/b4/3d/43/b43d438638e2ed51d1f19dad2a4eb24d.gif",
            title: "forth title",
            readingTime: 8
        },
    ]

    return (

        <div className={styled.homeWrapper}>
            <Navbar title='RAAD BLOG' />

            <div className="container">
                <h2>New Articles :</h2>
                <div className={styled.articles}>
                    {
                        articles.map((article) =>(
                            <Article key={article.id} articleData={article} />
                        ))
                    }


                    
                    
                </div>

            </div>
        </div>

    )
}


export default Home;
import Navbar from "../../components/navbar/Navbar";
import styled from "./ArticleSin.module.css";
import img from "../../assets/image/article.gif";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";



function ArticleSin() {

    const params = useParams()

    console.log(params);


    return (
        <div>
            <Navbar title='RAAD BLOG' />

            <div className={styled.articleWrapper}>
                <div className="container">
                    <h1>Article Page :</h1>
                    <div className={styled.articleInfo}>
                        <span>Date:2023/03/04</span>
                        <span>Author:Raad</span>
                        <span>Time For Reading: 5 min</span>
                    </div>

                    <img src={img} alt="" />

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat totam fugit a aut corrupti eius expedita, dolore possimus aliquam minima, consectetur, consequatur numquam aliquid repudiandae quidem ut earum esse corporis laudantium exercitationem rem harum doloremque qui! Voluptates pariatur sequi quas quidem inventore dolore illum, labore explicabo voluptatum doloremque maiores eaque. Quasi, maxime obcaecati repellendus porro optio modi, aspernatur itaque assumenda eveniet dolorum expedita libero veniam aperiam! Beatae nemo fugiat culpa veritatis tenetur, consectetur id? Veniam, fugiat deleniti! Fuga vel voluptatum tempore assumenda deleniti repudiandae sunt dolor quo distinctio quibusdam placeat beatae voluptatem recusandae et, iusto, harum aliquid ab delectus dolorem minus repellat perferendis reprehenderit mollitia! Reprehenderit, illo. Dolor soluta officiis porro! Non similique aut necessitatibus eos ut odit illum illo! Numquam eos voluptas, molestiae reiciendis exercitationem excepturi ea. Corporis, distinctio maiores corrupti adipisci, commodi ducimus eius eaque placeat eveniet deleniti mollitia facere ad hic sapiente doloremque possimus? Expedita officia delectus, fugiat inventore et magnam repellat deleniti, accusantium officiis consequatur quae! Reiciendis quam ducimus eos impedit et quidem, nihil enim ipsam porro deleniti quasi est voluptatum eum esse quod facere possimus id magni consectetur minus? Hic mollitia eveniet molestias? Sapiente illum blanditiis, laboriosam voluptas deleniti cupiditate dolor deserunt cum voluptate eum.</p>
                </div>
            </div>


            <Footer />
        </div>

    )
}


export default ArticleSin;
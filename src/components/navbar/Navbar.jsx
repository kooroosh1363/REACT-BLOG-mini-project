import styled from './Navbar.module.css'

function Navbar() {

    let title = "RAAD BLOG";



    return (
        <div className={styled.header}>


            <div className={styled.menu}>
                <div><h3>{title}</h3></div>
                <div >
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Articles</a></li>
                        <li><a href="#">New Articles</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>

            <div className={styled.search}>
                <input type="text" />
            </div>
        </div>
    );
}



export default Navbar;
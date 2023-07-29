import styled from './Navbar.module.css'

function Navbar(props) {





    return (
        <div className={styled.headerWrapper}>
            <div className="container">
                <div className={styled.header}>
                    <div className={styled.menu}>
                        <div><h3>{props.title}</h3></div>
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
            </div>
        </div>


    );
}



export default Navbar;
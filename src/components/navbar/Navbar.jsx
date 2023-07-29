import styled from './Navbar.module.css'

function Navbar() {
    return (
        <div className={styled.header}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Articles</a></li>
                <li><a href="#">New Articles</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
    );
}



export default Navbar;
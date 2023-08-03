
import styled from "./notFound.module.css";


function NotFound() {
    return (
        <div className={styled.notFoundWrapper}>
            <h1>404</h1>
            <p>This Page Not Found</p>
        </div>
    );
}

export default NotFound;
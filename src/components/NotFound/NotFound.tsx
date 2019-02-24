import * as React from "react";
import "./not-found.scss";

const NotFound: React.FunctionComponent = () => {
    return (
        <div className="notfound-container">
            <header>404</header>
            <p>Page not found!</p>
        </div>
    );
};

export default NotFound;
import React from 'react';
import "../styles/UnauthorizedPage.css";
import { useNavigate } from "react-router-dom";

export const Unauthorized = () => {

    const navigate = useNavigate();

    return (
        <div className="container-center unauthorized">
            <div className="content-wrapper">
                <h1>401</h1>
                <h3>UNAUTHORIZED</h3>
                <p>You are not authorized to access this page.</p>
                <button className="go-back-btn" onClick={ () => navigate("/home") }>Go Back Home</button>
            </div>
        </div>
    );
};

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Details() {
    const title = useLocation().state?.title;
    const description = useLocation().state?.description;
    const image = useLocation().state?.image;
    const navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }

    return (
        <div className="details">
            <div className="details-header">
                <h1>Doggiepedia</h1>
                <button className="back-button" onClick={handleClick}>Back to Home</button>
            </div>
            <div className="details-content">
                <h1 className="details-title">{title}</h1>
                <img src={image} alt="detail-image"/>
                <p className="details-description">{description}</p>
            </div>
        </div>
    );
}

export default Details;
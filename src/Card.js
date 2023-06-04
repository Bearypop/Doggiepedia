import React from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/details", { state: { title: props.title, description: props.fullDescription, image: props.image } });
    };

    return (
            <div className="card">
                <img className="card-img" src={props.image}/>
                <h2 className="card-title">{props.title}</h2>
                <p className="card-description">{props.description}...</p>
                {/* <Link to="/details">More info</Link> */}
                <button className="btn btn-lg" onClick={handleClick}>More info</button>
            </div>
    );
}

export default Card;
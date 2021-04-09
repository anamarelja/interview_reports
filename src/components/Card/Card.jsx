import React, { useContext, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    
      <div className="Card">
        <img src={props.user.avatar} alt="user"/>
        <div className="bottomCard">
        <div>
          <p>{props.user.name}</p>
          <a href = {`mailto: ${props.user.email}`}>{props.user.email.toLowerCase()}</a>
        </div>
        <Link to={`/user${props.user.id}`} className="links">View Profile</Link>
        </div>
      </div>
    
  );
};

export default Card;

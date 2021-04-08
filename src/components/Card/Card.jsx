import React, { useContext, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to={`/user${props.user.id}`}>
      <div className="Card">
        <img src={props.user.avatar} alt="user-image" />
        <h3>{props.user.name}</h3>
        <h4>{props.user.email}</h4>
      </div>
    </Link>
  );
};

export default Card;

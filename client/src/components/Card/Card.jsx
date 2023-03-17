import React from "react";
import "./Card.scss";

function Card({
  id,
  category,
  title,
  description,
  location,
  start,
  organization,
  url,
}) {
  return (
    <div className="card">
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
      <p className="card__category">Category: {category}</p>
      <p className="card__location">Location: {location}</p>
      <p className="card__start">Start Date: {start}</p>
      <p className="card__organization">Organization: {organization}</p>
    </div>
  );
}

export default Card;

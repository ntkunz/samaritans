import React from "react";
import Card from "../Card/Card";
import "./Cards.scss";

const Cards = ({ cards }) => {
  if (!cards || !Array.isArray(cards)) {
    return <div>No results to display.</div>;
  }

  return (
    <ul id="cards__list" className="cards__list">
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            cardCategory={card.category}
            cardTitle={card.title}
            cardDescription={card.description}
            cardLocation={card.location}
            cardStart={card.start}
            cardOrganization={card.organization}
          />
        );
      })}
    </ul>
  );
};

export default Cards;

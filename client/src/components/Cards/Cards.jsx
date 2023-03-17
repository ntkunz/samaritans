import React from "react";
import Card from "./OpportunityCard";
import "./Cards.scss";

const Cards = ({ cards }) => {
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

import React from "react";
import { StyledCard } from "./styles/Card.styled";

export default function Card({ item: { id, title, body, image } }) {
  return (
    <StyledCard layout={id % 2 === 0 && "row"}>
      <div className="card-img">
        <img src={`./images/${image}`} alt={`${image}`} />
      </div>
      <div className="card-body">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </StyledCard>
  );
}

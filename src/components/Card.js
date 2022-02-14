import React from "react";
import { StyledCard } from "./styles/Card.styled";

export default function Card({ item: { id, title, body, image } }) {
  return (
    <StyledCard layout={id % 2 === 0 && "column-reverse"}>
      <div>
        <div>
          <img src={`./images/${image}`} alt={`${image}`} />
        </div>
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </div>
    </StyledCard>
  );
}

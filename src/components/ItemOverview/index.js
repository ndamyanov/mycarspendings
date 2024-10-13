import React from "react";
import { Link } from "react-router-dom";
import { StyledCard, Title, StyledLink } from "./styles";
import CreateIcon from "@mui/icons-material/Create";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const ItemOverview = (props) => {
  const { id, carNumber, vin, model, year, brand } = props.data;
  const { onUpdateCarClick, onDelleteCarClick } = props;

  return (
    <StyledCard>
      <StyledLink to={{ pathname: `/cars/${id}`, state: props.data }}>
        <Title>
          {brand} {model}
        </Title>
      </StyledLink>
      <div>
        <b>{carNumber}</b>
      </div>
      <div>
        <DeleteForeverIcon
          style={{ color: "#CD5C5C  ", cursor: "pointer" }}
          onClick={onDelleteCarClick}
          fontSize="medium"
        />
      </div>
      <h6>
        <b>{year}</b>
      </h6>
      <div>{vin}</div>
      <div>
        <CreateIcon
          onClick={onUpdateCarClick}
          fontSize="medium"
          style={{ cursor: "pointer", color: "#708090" }}
        />
      </div>
    </StyledCard>
  );
};

export default ItemOverview;

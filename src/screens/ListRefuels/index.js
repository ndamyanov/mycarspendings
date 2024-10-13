import React, { useState } from "react";
import {
  Container,
  AddButton,
  StyledCard,
  ListContainer,
  Date,
  Description,
  Icons,
} from "./styles";

import { formatDate, compareDatesDesc } from "../../helpers/utils";
import UpdateRefuel from "../../components/Forms/UpdateRefuel";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import NewRefuel from "../../components/Forms/NewRefuel";

const ListRefuels = (props) => {
  let { carId, items, onAddRefuel, onUpdateRefuel, onDeleteRefuel } = props;

  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [entityToUpdate, setEntityToUpdate] = useState({});

  const refuels = items?.sort(compareDatesDesc);

  const onUpdate = (currentEntity) => {
    setShowModalUpdate(true);
    setEntityToUpdate(currentEntity);
  };

  const onDelete = (id) => {
    let confirm = window.confirm("Delete entry?");

    if (confirm) {
      onDeleteRefuel(id);
    }
  };

  return (
    <Container>
      <AddButton
        style={{ backgroundColor: "#41b3a3" }}
        onClick={() => setShowModalCreate(true)}
      >
        <AddIcon fontSize="large" />
      </AddButton>
      <NewRefuel
        carID={carId}
        onAddRefuel={onAddRefuel}
        showModal={showModalCreate}
        setShowModal={setShowModalCreate}
      />
      <UpdateRefuel
        refuel={entityToUpdate}
        onUpdateRefuel={onUpdateRefuel}
        showModal={showModalUpdate}
        setShowModal={setShowModalUpdate}
      />
      <ListContainer>
        {!refuels ||
          (refuels.length === 0 && (
            <>
              <h3>No entries</h3>
              <div>
                You can add you first refuels with the button on the bottom.
              </div>
            </>
          ))}
        {refuels &&
          refuels.map((i) => (
            <StyledCard key={i.date}>
              <Date>{formatDate(i.date)}</Date>
              <Description>{i.fuelType}</Description>
              <div>{i.cost && <strong>${i.cost}</strong>}</div>
              <Icons>
                <EditIcon
                  style={{ cursor: "pointer", color: "#708090" }}
                  onClick={() => onUpdate(i)}
                  fontSize="medium"
                />
                <DeleteForeverIcon
                  style={{ color: "#CD5C5C  ", cursor: "pointer" }}
                  onClick={() => onDelete(i.id)}
                  fontSize="medium"
                />
              </Icons>
            </StyledCard>
          ))}
      </ListContainer>
    </Container>
  );
};

export default ListRefuels;

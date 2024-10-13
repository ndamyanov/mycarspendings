import React, { useEffect, useState } from "react";
import {
  Container,
  AddButton,
  StyledCard,
  ListContainer,
  Date,
  Description,
  Icons,
} from "./styles";
import Search from "../../components/SearchField";

import { formatDate, compareDatesDesc } from "../../helpers/utils";
import NewTax from "../../components/Forms/NewTax";
import UpdateTax from "../../components/Forms/UpdateTax";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const ListTaxes = (props) => {
  let {
    carId,
    items,
    searchPattern,
    setSearchPattern,
    onAddTax,
    onUpdateTax,
    onDeleteTax,
  } = props;

  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [taxToUpdate, setTaxToUpdate] = useState({});
  const [taxesToShow, setTaxesToShow] = useState();

  const onUpdate = (current) => {
    setShowModalUpdate(true);
    setTaxToUpdate(current);
  };

  const onDelete = (id) => {
    let confirm = window.confirm("Delete item?");

    if (confirm) {
      onDeleteTax(id);
    }
  };

  useEffect(() => {
    if (items) {
      let tempList = [...items];
      if (searchPattern.length > 0) {
        tempList = tempList.filter((s) =>
          s.description.includes(searchPattern)
        );
      }
      tempList.sort(compareDatesDesc);
      setTaxesToShow(tempList);
    }
  }, [items, searchPattern]);

  return (
    <Container>
      <Search
        searchPattern={searchPattern}
        setSearchPattern={setSearchPattern}
      />
      <AddButton
        style={{ backgroundColor: "#41b3a3" }}
        onClick={() => setShowModalCreate(true)}
      >
        <AddIcon fontSize="large" />
      </AddButton>
       <NewTax
        carID={carId}
        onAddTax={onAddTax}
        showModal={showModalCreate}
        setShowModal={setShowModalCreate}
      /> 
      <UpdateTax
        tax={taxToUpdate}
        onUpdateTax={onUpdateTax}
        showModal={showModalUpdate}
        setShowModal={setShowModalUpdate}
      />
      <ListContainer>
        {!taxesToShow ||
          (taxesToShow.length === 0 && (
            <>
              <h3>No entries</h3>
              <div>
                You can add you first tax with the button on the bottom.
              </div>
            </>
          ))}
        {taxesToShow &&
          taxesToShow.map((i) => (
            <StyledCard key={i.date}>
              <Date>{formatDate(i.date)}</Date>
              {/* {i.km > 0 ? <Km>{i.km} km</Km> : <Km>-</Km>} */}
              <Description>{i.description}</Description>
              <div>{i.cost && <span>${i.cost}</span>}</div>
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

export default ListTaxes;

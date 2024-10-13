import React, { useEffect, useState } from "react";
import {
  Container,
  AddButton,
  StyledCard,
  ListContainer,
  Date,
  Km,
  Description,
  Icons,
} from "./styles";
import Search from "../../components/SearchField";

import { formatDate, compareDatesDesc } from "../../helpers/utils";
import NewService from "../../components/Forms/NewService";
import UpdateService from "../../components/Forms/UpdateService";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const ListServices = (props) => {
  let {
    carId,
    items,
    searchPattern,
    setSearchPattern,
    onAddService,
    onUpdateService,
    onDeleteService,
  } = props;

  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [serviceToUpdate, setServiceToUpdate] = useState({});

  //const services = carData?.services?.items;
  const [servicesToShow, setServicesToShow] = useState();

  const onUpdate = (currentService) => {
    setShowModalUpdate(true);
    setServiceToUpdate(currentService);
  };

  const onDelete = (id) => {
    let confirm = window.confirm("Delete service?");

    if (confirm) {
      onDeleteService(id);
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
      setServicesToShow(tempList);
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
      <NewService
        carID={carId}
        onAddService={onAddService}
        showModal={showModalCreate}
        setShowModal={setShowModalCreate}
      />
      <UpdateService
        service={serviceToUpdate}
        onUpdateService={onUpdateService}
        showModal={showModalUpdate}
        setShowModal={setShowModalUpdate}
      />
      <ListContainer>
        {!servicesToShow ||
          (servicesToShow.length === 0 && (
            <>
              <h3>No entries</h3>
              <div>
                You can add you first service with the button on the bottom.
              </div>
            </>
          ))}
        {servicesToShow &&
          servicesToShow.map((i) => (
            <StyledCard key={i.date}>
              <Date>{formatDate(i.date)}</Date>
              {i.km > 0 ? <Km>{i.km} km</Km> : <Km>-</Km>}
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

export default ListServices;

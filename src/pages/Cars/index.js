import React, { useState, useEffect } from "react";
import {
  Container,
  AddButton,
  StyledBgImage,
  StyledScrolledContainer,
} from "./styles";
import { API } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Search from "../../components/SearchField";
import NewCar from "../../components/Forms/NewCar";
import UpdateCar from "../../components/Forms/UpdateCar";
import ItemOverview from "../../components/ItemOverview";
// import { Add } from "@mui/icons-material/icons";
import AddIcon from "@mui/icons-material/Add";
import { listCars } from "../../graphql/queries";
import { Auth } from "aws-amplify";
import Loader from "../../components/Loader";
import { updateCar as updateCarMutation } from "../../graphql/mutations";
import { useMyContext } from "../../context/context";
// import bannerImage from "../../assets/suv.jpeg";

const Cars = () => {
  const [cars, setCars] = useState();
  const [filteredCars, setFilteredCars] = useState();
  const [searchPattern, setSearchPattern] = useState("");
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [carToUpdate, setCarToUpdate] = useState({});
  const [currentUser, setCurrentUser] = useState("");

  const { isLoading, setIsLoading } = useMyContext();

  useEffect(() => {
    const getToken = async () => {
      const { accessToken } = await Auth.currentSession();

      setCurrentUser(accessToken.payload.sub);
    };
    getToken();
  }, []);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    setIsLoading(true);
    const apiData = await API.graphql({
      query: listCars,
      variables: {
        filter: {
          isActive: {
            eq: true,
          },
        },
      },
    });
    const carsFromAPI = apiData.data.listCars.items;
    console.log(carsFromAPI);
    setCars(carsFromAPI);
    setFilteredCars(carsFromAPI);
    setIsLoading(false);
  };

  useEffect(() => {
    if (searchPattern.length > 0) {
      const filtered = cars.filter(
        (c) =>
          c.carNumber.toLowerCase().includes(searchPattern) ||
          c.brand.toLowerCase().includes(searchPattern) ||
          c.model.toLowerCase().includes(searchPattern) ||
          c.vin.toLowerCase().includes(searchPattern)
      );
      setFilteredCars(filtered);
    } else {
      setFilteredCars(cars);
    }
  }, [searchPattern]);

  const onAddNewCarClick = () => {
    setShowModalCreate(true);
  };

  const onUpdateCarClick = (carToUpdate) => {
    setCarToUpdate(carToUpdate);
    setShowModalUpdate(true);
  };

  const onDeleteCarClick = async (carToDelete) => {
    let confirm = window.confirm("Delete car?");

    if (confirm) {
      const data = {
        id: carToDelete.id,
        isActive: false,
      };

      // soft delete entity
      await API.graphql({
        query: updateCarMutation,
        variables: { input: data },
      });

      // await API.graphql({
      //   query: deleteCar,
      //   variables: { input: { id } },
      // });

      fetchCars();
    }
  };

  return (
    <StyledBgImage
      bgImage={
        "https://firebasestorage.googleapis.com/v0/b/niki-test-project.appspot.com/o/suv.jpeg?alt=media&token=695ec7ca-75b9-4798-aa64-d9ddcda9400d"
      }
    >
      <Container>
        <Search
          searchPattern={searchPattern}
          setSearchPattern={setSearchPattern}
        />

        {!isLoading && (
          <AddButton onClick={() => onAddNewCarClick()}>
            <AddIcon fontSize="large" />
          </AddButton>
        )}

        <NewCar
          showModal={showModalCreate}
          setShowModal={setShowModalCreate}
          fetchCars={fetchCars}
          currentUser={currentUser}
        />

        <UpdateCar
          showModal={showModalUpdate}
          setShowModal={setShowModalUpdate}
          car={carToUpdate}
          fetchCars={fetchCars}
        />
        <StyledScrolledContainer>
          {/* <Loader /> */}
          {isLoading && <Loader />}
          {!isLoading &&
            filteredCars &&
            filteredCars.map((car) => (
              <ItemOverview
                data={car}
                key={car.id}
                setShowModal={setShowModalUpdate}
                onUpdateCarClick={() => onUpdateCarClick(car)}
                onDelleteCarClick={() => onDeleteCarClick(car)}
              ></ItemOverview>
            ))}
        </StyledScrolledContainer>
      </Container>
    </StyledBgImage>
  );
};

export default withAuthenticator(Cars);

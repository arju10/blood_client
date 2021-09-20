import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import DonorListLayout from "./DonorListLayout";

const DonorList = () => {
  const [donors, setDonors] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("https://sheltered-sierra-12715.herokuapp.com/donors?search=" + search)
      .then((res) => res.json())
      .then((data) => setDonors(data))
      .catch((error) => console.log(error));
  }, [search]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <>
      <Container>
        <h1 className="text-center ">Donors List</h1>
        <input type="text" onBlur={handleSearch} placeholder="Search Blood" />
        <br />
        <br />
        <Row xs={1} md={3} className="g-4">
          {donors.map((donor, key) => (
            <DonorListLayout donor={donor} key={donor._id} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default DonorList;

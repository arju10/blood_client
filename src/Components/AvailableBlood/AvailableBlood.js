import React, { useEffect, useState } from "react";
import { Container, CardGroup } from "react-bootstrap";
import BloodGroupLayout from "./BloodGroupLayout";

const AvailableBlood = () => {
  const [bloods, setBloods] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("https://sheltered-sierra-12715.herokuapp.com/donors?search=" + search)
      .then((res) => res.json())
      .then((data) => setBloods(data));
  }, [search]);
  return (
    <>
      <Container>
        <CardGroup>
          {bloods.map((blood, key) => (
            <BloodGroupLayout blood={blood} key={blood._id} />
          ))}
        </CardGroup>
      </Container>
    </>
  );
};

export default AvailableBlood;

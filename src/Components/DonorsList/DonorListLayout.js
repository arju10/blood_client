import { Divider } from "@mui/material";
import React from "react";
import { Card, Col } from "react-bootstrap";
const DonorListLayout = (props) => {
  const { _id, name, blood_group, phone, state, zip, city } = props.donor;
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title className="text-danger text-center">
            Blood : {blood_group}
          </Card.Title>
          <Divider />
          <Card.Text>
            <p>Name : {name}</p>
            <p>Phone : {phone}</p>
            <p>City : {city}</p>
            <p>State : {state}</p>
            <p>Zip : {zip}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DonorListLayout;

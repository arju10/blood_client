import React from "react";
import { Card } from "react-bootstrap";
const BloodGroupLayout = (props) => {
  console.log(props);
  const { blood_group } = props.blood;
  return (
    <>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Blood</Card.Title>
          <Card.Text>{blood_group.length}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default BloodGroupLayout;

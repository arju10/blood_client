// import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Form, Row, Col, Button, Container } from "react-bootstrap";

const RequestForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    const postData = {
      name: data.name,
      phone: data.phone,
      blood_group: data.blood_group,
      username: data.username,
      city: data.city,
      state: data.state,
      zip: data.zip,
      locationPin: data.locationPin,
    };
    const url = `https://sheltered-sierra-12715.herokuapp.com/addRequest`;
    console.log(postData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postData),
    }).then((res) => {
      console.log("server side", res);
      e.target.reset();
    });
  };

  return (
    <>
      <Container>
        <h1 className="text-center">Request For Blood</h1>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                {...register("name", { required: true })}
                placeholder="Name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                placeholder="Phone Number"
                type="text"
                {...register("phone", { required: true })}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <label className="mt-1">Blood group</label>
              <br />
              <select {...register("blood_group", { required: true })}>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                {...register("city", { required: true })}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                {...register("state", { required: true })}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                {...register("zip", { required: true })}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Location Pin</Form.Label>
              <Form.Control
                type="text"
                placeholder="Location Pin Code"
                {...register("locationPin", { required: true })}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Location Code.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      </Container>
    </>
  );
};

export default RequestForm;

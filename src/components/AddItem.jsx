import React, { useState } from "react";
import TodoItem from "../models/TodoItem";
import { makeID, colors, handleChange } from "../utills/utils";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import dateFormat from 'dateformat'
import ColorPicker from "./ColorPicker";
import "../styles/AddItem.css";

const AddItem = ({ addItem }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateExpired, setDateExpired] = useState(new Date());
  const [timeExpired, setTimeExpired] = useState("");
  const [_colors, setColors] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false
  ]);

  const pick = index => {
    setColors(_colors.map((col, i) => (i === index ? true : false)));
  };

  const findColor = () => {
      let index = 0
      _colors.forEach((color, i) => {
          if (color) {
              index = i
          }
      })

      return colors[index]
  }

  const handleSubmit = () => {
    const dateWithTimeExpired = new Date(dateExpired);
    const hours = timeExpired.split(":")[0];
    const minutes = timeExpired.split(":")[1];
    dateWithTimeExpired.setHours(hours);
    dateWithTimeExpired.setMinutes(minutes);
    console.error(findColor())
    const item = new TodoItem(
      makeID(),
      title,
      description,
      new Date(),
      dateWithTimeExpired,
      false,
      findColor()
    );
    addItem(item);

    setTitle("");
    setDescription("");
    setDateExpired(new Date());
    setTimeExpired("");
  };

  return (
    <div style={{ marginBottom: 50 }}>
      <Row>
        <Col lg={3} md={3} sm={3} xs={0} />
        <Col lg={6} md={6} sm={6} xs={12}>
          <Card>
            <Card.Body>
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    value={title}
                    onChange={handleChange(setTitle)}
                    type="text"
                    placeholder="Some title..."
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    value={description}
                    onChange={handleChange(setDescription)}
                    type="textarea"
                    as="textarea"
                    rows={3}
                    placeholder="Write description here"
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Date Expired</Form.Label>
                  <Form.Control
                    value={dateFormat(dateExpired, 'yyyy-mm-dd')}
                    onChange={handleChange(setDateExpired)}
                    type="date"
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Time Expired</Form.Label>
                  <Form.Control
                    value={timeExpired}
                    onChange={handleChange(setTimeExpired)}
                    type="time"
                  />
                </Form.Group>
                <div style={{ height: '2.5em'}}>
                    <ColorPicker colors={_colors} pick={pick} />
                </div>
                
              </Form>
            </Card.Body>
            <Card.Footer>
              <Button variant="outline-info" size="lg" onClick={handleSubmit}>
                Add
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col lg={3} md={3} sm={3} xs={0} />
      </Row>
    </div>
  );
};

export default AddItem;

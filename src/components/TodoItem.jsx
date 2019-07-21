import React, { useState } from "react";
import { Button, Card, Row, Col, Alert } from "react-bootstrap";
import EditItem from "./EditItem";
import dateFormat from "dateformat";
import '../styles/TodoItem.css'

const TodoItem = ({ item, deleteItem, editItem }) => {
  const [modal, switchModal] = useState(false);
  return (
    <div>
      <Card
        className="center p-3 shadow-card"
        bg={item.color}
        text={item.color === "light" ? "black" : "white"}
      >
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Alert variant="success">
            Added:{" "}
            <time>
              {dateFormat(item.timeAdded, "dddd, mmmm d, yyyy,  HH:MM")}
            </time>
          </Alert>
          <Alert variant="success">
            Expired:{" "}
            <time>
              {dateFormat(item.timeExpired, "dddd, mmmm d, yyyy,  HH:MM")}
            </time>
          </Alert>
        </Card.Body>
        {item.timeExpired.valueOf() < item.timeAdded.valueOf() && (
          <Card.Footer>
            <Alert variant="danger">This event is expired, do it faster</Alert>
          </Card.Footer>
        )}
        <Card.Footer>
          <Row>
            <Col>
              <Button
                size="sm"
                variant={item.color === "primary" ? "light" : "primary"}
                onClick={() => deleteItem(item.id)}
              >
                Complete
              </Button>
            </Col>
            <Col>
              <Button
                size="sm"
                onClick={() => switchModal(true)}
                variant={item.color === "success" ? "dark" : "success"}
              >
                Edit
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
      <EditItem
        item={item}
        modal={modal}
        switchModal={switchModal}
        editItem={editItem}
      />
    </div>
  );
};

export default TodoItem;

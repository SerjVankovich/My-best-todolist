import React from "react";
import TodoItem from "./TodoItem";
import { CardColumns, Row, Col } from "react-bootstrap";

const TodoList = ({ items, deleteItem, editItem }) => {
  return (
    <Row>
      <Col lg={3} md={3} sm={3} xs={0} />
      <Col lg={6} md={6} sm={6} xs={12}>
        <CardColumns>
          {items.map((item, key) => (
            <TodoItem
              editItem={editItem}
              deleteItem={deleteItem}
              item={item}
              key={key}
            />
          ))}
        </CardColumns>
      </Col>
      <Col lg={3} md={3} sm={3} xs={0} />
    </Row>
  );
};

export default TodoList;

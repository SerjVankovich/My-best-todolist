import React, { useState } from "react";
import { Modal, Form, FormGroup, Button } from "react-bootstrap";
import dateFormat from "dateformat";
import { handleChange } from "../utills/utils";

const EditItem = ({ item, editItem, modal, switchModal }) => {
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [dateExpired, setDateExpired] = useState(
    dateFormat(item.timeExpired, "yyyy-mm-dd")
  );
  const [timeExpired, setTimeExpired] = useState(
    dateFormat(item.timeExpired, "HH:MM")
  );

  const saveChanges = () => {
    item.title = title;
    item.description = description;
    item.timeExpired = new Date(dateExpired);
    item.timeExpired.setHours(timeExpired.split(":")[0]);
    item.timeExpired.setMinutes(timeExpired.split(":")[1]);
    return item;
  };
  return (
    <Modal show={modal} onHide={() => switchModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>
          <Form.Control
            type="text"
            onChange={handleChange(setTitle)}
            value={title}
            placeholder="Some title..."
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormGroup>
          <Form.Control
            type="text"
            onChange={handleChange(setDescription)}
            as="textarea"
            value={description}
            placeholder="Write description here"
          />
          <Form.Control
            type="date"
            onChange={handleChange(setDateExpired)}
            value={dateExpired}
          />
          <Form.Control
            type="time"
            onChange={handleChange(setTimeExpired)}
            value={timeExpired}
          />
        </FormGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => switchModal(false)}>Close</Button>
        <Button
          onClick={() => {
            editItem(saveChanges());
            switchModal(false);
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditItem;

import React from "react";
import { Row, Col } from "react-bootstrap";
import { htmlColors } from "../utills/utils";

const ColorPicker = ({ pick, colors }) => {
  const checkPicked = i => {
    return colors[i] ? "3px solid #a161d5" : "";
  };
  return (
    <Row>
        {htmlColors.map((color, i) => (
            <Col key={i}>
            <div
              style={{ background: color, border: checkPicked(i) }}
              onClick={() => pick(i)}
              className="custom-checkbox"
            />
          </Col>
        ))}
    </Row>
  );
};

export default ColorPicker;

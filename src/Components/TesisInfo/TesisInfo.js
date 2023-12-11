// TesisInfo.js
import React from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TesisInfo = ({ onFacultadChange, onEscuelaChange }) => {
  return (
    <div className="container mt-5">
      <Form>
        <Form.Group controlId="formFacultad">
          <Form.Label>Facultad:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese una facultad"
            onChange={(e) => onFacultadChange(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formEscuela">
          <Form.Label>Escuela:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese una escuela"
            onChange={(e) => onEscuelaChange(e.target.value)}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default TesisInfo;

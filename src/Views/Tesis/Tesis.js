// Tesis.js
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Toolbar from '../../Components/Toolbar/Toolbar';
import TesisInfo from '../../Components/TesisInfo/TesisInfo';
import FileContainer from '../../Components/FileContainer/FileContainer';

const Tesis = () => {
  const [facultad, setFacultad] = useState('');
  const [escuela, setEscuela] = useState('');

  const handleFacultadChange = (value) => {
    setFacultad(value);
  };

  const handleEscuelaChange = (value) => {
    setEscuela(value);
  };

  return (
    <div>
      <Toolbar />
      <Container className="mt-6" style={{ marginTop: '100px' }}>
        <TesisInfo
          onFacultadChange={handleFacultadChange}
          onEscuelaChange={handleEscuelaChange}
        />
        <FileContainer facultad={facultad} escuela={escuela} />
      </Container>
    </div>
  );
};

export default Tesis;

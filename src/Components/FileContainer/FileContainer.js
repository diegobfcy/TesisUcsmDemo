// FileContainer.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap';
import { uploadFile } from '../../services/apiService';

const FileContainer = ({ facultad, escuela }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFileUpload = async () => {
    try {
      if (!selectedFile || !facultad || !escuela) {
        console.error('Por favor, complete todos los campos.');
        return;
      }
      console.log(selectedFile,facultad,escuela)
      const response = await uploadFile(selectedFile, facultad, escuela);
      
      console.log('Respuesta de la API:', response);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Subir Documento PDF</h2>
      <Form>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Seleccionar archivo PDF:</Form.Label>
          <Form.Control type="file" accept=".pdf" onChange={handleFileChange} />
        </Form.Group>

        <Button variant="primary" onClick={() => handleFileUpload()}>
          Subir
        </Button>
      </Form>
    </Container>
  );
};
export default FileContainer;

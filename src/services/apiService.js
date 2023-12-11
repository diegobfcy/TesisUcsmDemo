import axios from 'axios';

const apiUrl = 'http://localhost:3001/subir';

const uploadFile = async (file, facultad, escuela) => {
  try {
    const formData = new FormData();
    formData.append('facultad', facultad);
    formData.append('escuela', escuela);
    formData.append('archivo', file);

    const response = await axios.post(apiUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(`Error al enviar el archivo: ${error.message}`);
  }
};

export { uploadFile };
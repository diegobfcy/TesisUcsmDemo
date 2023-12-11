import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import LoginForm from '../../Components/LoginForm/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import Toolbar from '../../Components/Toolbar/Toolbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de inicio de sesión, como enviar los datos al servidor.
    console.log('Email:', email);
    console.log('Contraseña:', password);
  };

  return (
    <div className="login-container">
      <Toolbar />
      <div className="bg-image">
        <Container>
          <LoginForm />
        </Container>
      </div>
    </div>
  );
};

export default Login;

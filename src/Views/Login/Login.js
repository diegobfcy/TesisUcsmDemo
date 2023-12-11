import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import LoginForm from '../../Components/LoginForm/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

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
    <div className="bg-image">
        <div className="container">
            <LoginForm />
        </div>
    </div>

  );
};

export default Login;
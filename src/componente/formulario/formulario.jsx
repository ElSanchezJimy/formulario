import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap'; //Experimentando esta biblioteca

function Registro() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const validarCampos = () => {
    let errores = {};
    if (!nombre) {
      errores.nombre = 'El nombre es obligatorio';
    }
    if (!correo) {
      errores.correo = 'El correo electrónico es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(correo)) {
      errores.correo = 'El correo electrónico es inválido';
    }
    if (!contrasena) {
      errores.contrasena = 'La contraseña es obligatoria';
    } else if (contrasena.length < 6) {
      errores.contrasena = 'La contraseña debe tener al menos 6 caracteres';
    }
    setErrores(errores);
    return Object.keys(errores).length === 0;
  };

  const enviarFormulario = (event) => {
    event.preventDefault();
    if (validarCampos()) {
      setEnviado(true);
      setNombre('');
      setCorreo('');
      setContrasena('');
    }
  };

  return (
    <div className="colspan-colum-6">
      <div class="box">
        <div className="container">
          <h1>Formulario de Registro</h1>
          {enviado && <Alert variant="success">Formulario enviado correctamente</Alert>}
          <Form onSubmit={enviarFormulario}>
            <Form.Group controlId="nombre">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
              {errores.nombre && <Form.Text className="text-danger">{errores.nombre}</Form.Text>}
            </Form.Group>
            <Form.Group controlId="correo">
              <Form.Label>Correo electrónico:</Form.Label>
              <Form.Control type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
              {errores.correo && <Form.Text className="text-danger">{errores.correo}</Form.Text>}
            </Form.Group>
            <Form.Group controlId="contrasena">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
              {errores.contrasena && <Form.Text className="text-danger">{errores.contrasena}</Form.Text>}
            </Form.Group>
            <br></br>
            <Button variant="primary" type="submit">Registrarse</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Registro;
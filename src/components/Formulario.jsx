import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Formulario = () => {
  const [infoContacto, setinfoContacto] = useState({
    correo: "",
    descripcion: "",
  });

  // Previene el comportamiento default de los formularios el cual recarga el sitio
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(setinfoContacto);
    //Aquí se puede usar values para enviar la información
  };
  function handleChange(e) {
    /*
      e.target es el elemento que ejecuto el evento
      name identifica el input y value describe el valor actual
    */
    const { target } = e;
    const { name, value } = target;

    /*
      Este snippet:
      1. Clona el estado actual
      2. Reemplaza solo el valor del
         input que ejecutó el evento
    */
    const newinfoContacto = {
      ...infoContacto,
      [name]: value,
    };

    // Sincroniza el estado de nuevo
    setinfoContacto(newinfoContacto);
  }
  return (
    <>
      <Form onSubmit={handleSubmit} className="pt-5 text-center" >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Correo Electronico:</Form.Label>
          <Form.Control
            type="email"
            name="correo"
            placeholder="name@example.com"
            value={infoContacto.correo}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="descripcion"
            placeholder="Escriba aquí..."
            value={infoContacto.descripcion}
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit" className="btn btn-primary">
          Enviar
        </Button>
      </Form>
    </>
  );
};

export default Formulario;

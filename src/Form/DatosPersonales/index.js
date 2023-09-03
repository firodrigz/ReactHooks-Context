import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarNombre, validarApellidos, validarTelefono } from "./validaciones";

const DatosPersonales = ({ updateStep }) => {

  const [name, setName] = useState({ value: "", valid: null});
  const [lastname, setLastname] = useState({ value: "", valid: null});
  const [phone, setPhone] = useState({ value: "", valid: null});
  
  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        updateStep(2);
      }}
    >
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={name.value}
        onChange={ (input) => {
          const value = input.target.value;
          const valid = validarNombre(value);
          setName({ value, valid })
        }}
        error={name.valid === false}
        helperText={name.valid === false && "Ingresa un nombre válido"}
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={lastname.value}
        onChange={ (input) => {
          const value = input.target.value;
          const valid = validarApellidos(value);
          setLastname({ value, valid })
        }}
        error={lastname.valid === false}
        helperText={lastname.valid === false && "Ingresa un apellido válido"}
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value={phone.value}
        onChange={ (input) => {
          const value = input.target.value;
          const valid = validarTelefono(value);
          setPhone({ value, valid })
        }}
        error={phone.valid === false}
        helperText={phone.valid === false && "Ingresa un número de teléfono válido"}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;

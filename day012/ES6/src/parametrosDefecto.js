function registrarUsuario(nombre, pais, correo, telefono = '000-0000000') {
    return `Nombre: ${nombre}, Pais: ${pais}, Correo: ${correo}, Teléfono: ${telefono}`;
}

console.log(registrarUsuario('Rafael', 'Venezuela', 'rafa@example.com', '555-2356891'));
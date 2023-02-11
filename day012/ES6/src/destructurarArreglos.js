const persona = ['Rafael Aiquel', 47, 'Venezuela', 'Ingeniero'];

//const [nombre, , pais, profesion = 'No especificado'] = persona;

const mostrarInfo = ( [nombre, , pais, profesion = 'No especificado'] = persona ) => console.log(nombre, pais, profesion);

mostrarInfo(persona);
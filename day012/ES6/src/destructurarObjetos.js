const usuario = {
    nombre: 'Rafa',
    correo: 'rafa@example.com',
    edad: 47,
    pais: 'Venezuela',
    profesion: 'Ingeniero'
}

//const {nombre, profesion = 'No especificado'} = usuario;

const mostrarInfo = ( {nombre, profesion} ) => console.log(`${nombre} es ${profesion}`);
mostrarInfo(usuario)
import { mensajeAlerta } from "./modulos/mensajeAlerta";
import { saludo } from "./modulos/mensajeAlerta";
import { Usuario } from "./classes";

// mensajeAlerta('Hola Mundo!');
// saludo();

const rafa = new Usuario('Rafa', 47, 'rafa@example.com');

rafa.mostrarInfo();
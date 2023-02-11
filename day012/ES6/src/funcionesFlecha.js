const nombres = ['Carlos', 'Alejandro', 'Manuel', 'César'];

const número_caracteres = nombres.map(nombre => `${nombre} tiene ${nombre.length} letras`);

console.log(número_caracteres);
const texto = `Hola Mundo`;

console.log(texto, 'termina con H:', texto.toLowerCase().startsWith('h'));

console.log(texto, 'termina con H:', texto.toLowerCase().endsWith('o'));

console.log(texto, 'incluye la palabra \'Mundo\'', texto.includes('Mundo'));

const amigos = ['Carlos', 'Alejandro', 'César', 'Manuel'];

console.log(amigos.includes('Manuel'));

console.log(amigos.find(amigo => amigo.length > 6));

console.log(amigos.find(amigo => amigo === 'Manuel'));

console.log(amigos.findIndex(amigo => amigo === 'Manuel'));
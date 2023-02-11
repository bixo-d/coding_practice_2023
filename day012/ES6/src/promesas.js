const promesa = new Promise((resolve, reject) => {
    // Acción que se ejecutará
    setTimeout(() => {
        const exito = true;
        if (exito) {
            resolve(`La operación tuvo éxito`);
        } else {
            reject(`La operación falló`);
        }
    }, 4000);
});

promesa.then((mensaje) => {
    alert(mensaje);
});

promesa.catch((mensaje) => {
    alert(mensaje);
});
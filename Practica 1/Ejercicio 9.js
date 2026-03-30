let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Éxito después de 3 segundos");
    }, 3000);
});

promesa.then((mensaje) => {
    console.log(mensaje);
});

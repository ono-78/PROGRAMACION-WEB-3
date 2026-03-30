function obtener(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hola mundo");
        }, 1000);
    });
}

// Antes (promesas)
obtener().then((res) => {
    console.log(res);
});

// Después (async/await)
async function main(){
    let res = await obtener();
    console.log(res);
}

main();

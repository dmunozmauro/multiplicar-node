const { rejects } = require('assert');
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {
    let data = '';

    console.log("======================".green);
    console.log(`tabla de ${base}  `.green);
    console.log("======================".green);


    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i} \n`;
    }

    console.log(data);
}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, rejects) => {

        if (!Number(base)) {
            rejects(`El valor introducido '${base}' no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                rejects(err)
            else
                resolve(`tablas/tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}


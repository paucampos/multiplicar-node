// PRUEBA DE FILESYSTEM
const fs = require('fs');
const colors = require('colors');


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido en la base "${base}" no es un número`);
            return;
        } else if (!Number(limite)) {
            reject(`El valor introducido en limite "${limite}" no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        };

        fs.writeFile(`tablas/tabla-${base}-por-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(colors.yellow(`tabla-${base}-por-${limite}.txt`));
        });
    });
};

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido de base "${base}" no es un número`);
            return;
        } else if (!Number(limite)) {
            reject(`El valor introducido en limite "${limite}" no es un número`);
            return;
        }

        console.log('======================'.yellow);
        console.log(`== tabla del ${base} ==`.bgYellow);
        console.log('======================'.yellow);
        
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        };
        resolve(data);
    });
};

module.exports = {
    crearArchivo,
    listarTabla
}
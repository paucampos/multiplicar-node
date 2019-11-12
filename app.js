const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// Recibir variable por consola (node app --base=5);
// let argv2 = process.argv;
// console.log(argv2);

let comando = argv._[0];

switch (comando) {
  case 'listar':
    listarTabla(argv.base, argv.limite)
      .then(lista => console.log(`Lista:\n${lista}`.cyan))
      .catch(error => console.log(error));
    break;
  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(`Archivo creado: ${archivo}`))
      .catch(error => console.log(error));
    break;
  default:
    console.log('Comando no reconocido');
}

const { argv } = require('./config/yargs');
const { multiplicar } = require('./helpers/multiplicar');
const colors = require('./config/colors');

const to = argv.to;
const base = argv.base;

multiplicar(base, to, argv.list)
	.then((res) => console.log(colors.green('Archivo'), colors.green(res.underline), colors.green('¡Creado!'.bold)))
	.catch((err) => console.log(err));

const colors = require('./colors');
const argv = require('yargs')
	.options('b', {
		alias: 'base',
		type: 'number',
		describe: 'Es la base de la tabla de multiplicar.',
		demandOption: true,
	})
	.options('l', {
		alias: 'list',
		type: 'boolean',
		describe: 'Muestra la tabla en consola',
		default: false,
	})
	.options('t', {
		alias: 'to',
		type: 'number',
		describe: 'Límite de multiplicaciones',
		default: 10,
	})
	.check((argv, options) => {
		if (isNaN(argv.b)) {
			console.log(colors.error('No es un número'));
			throw colors.error('La base tiene que se un número. Ejemplo -b 5 o --base 5');
		}

		return true;
	}).argv;

module.exports = {
	argv,
};

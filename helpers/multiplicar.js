const fs = require('fs');

const multiplicar = async (base = 5, limit = 10, list = false) => {
	try {
		let printScreen = `
  =======================
  == Tabla del ${base} ==
  =======================
  `;

		for (let i = 0; i <= limit; i++) {
			printScreen += `${base} x ${i}= ${i * base}\n`;
		}

		if (list) {
			console.log(printScreen);
		}

		const data = new Uint8Array(Buffer.from(printScreen));
		fs.writeFileSync(`./out/Tabla del ${base}.txt`, data);
		return `Tabla del ${base}.txt`;
	} catch (err) {
		throw err;
	}
};

module.exports = {
	multiplicar,
};

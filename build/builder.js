// TODO: Build JS and Java in two concurrent child processes to take advantage of multiple CPU cores

const { spawn } = require('child_process');
const colors = require('colors');

const basePath = `${__dirname}/..`;
const args = [
	`${basePath}/src/wikitext.g4`,
	`${basePath}/src`,
	`${basePath}/java`,
];

module.exports = function (buildName) {
	console.log('Build '.blue + buildName + ' started'.blue);
	this.proc = spawn(`${__dirname}/build.sh`, args, { cwd: __dirname });

	this.proc.on('error', err => {
		console.error(`Error on build ${buildName}: ${err}\n`.brightRed);
		this.proc.kill('SIGUSR1'); // means the build had an error
	});

	this.proc.stderr.on('data', chunk => {
		console.error(`Error on build ${buildName}: ${chunk.toString()}\n`.brightRed);
		this.proc.kill('SIGUSR1'); // means the build had an error
	});

	this.proc.on('exit', (code, signal) => {
		this.proc = null;
		if (signal !== 'SIGUSR1') {
			if (code === 0 && signal === null) {
				console.log('Build '.green + buildName + ' completed\n'.green);
			}
			else {
				console.log('Build '.gray + buildName + ' cancelled\n'.gray);
			}
		}
		if (this.callback) {
			this.callback(buildName);
		}
	});

	this.kill = function (callback) {
		this.callback = callback;
		this.proc.kill('SIGTERM');
	}
};
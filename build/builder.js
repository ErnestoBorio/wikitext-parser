const { spawn } = require('child_process');

const basePath = `${__dirname}/..`;
const args = [
	`${basePath}/src/wikitext.g4`,
	`${basePath}/src`,
	`${basePath}/java`,
];

module.exports = function (buildName) {
	console.log(`Started build ${buildName}`);
	this.proc = spawn(`${__dirname}/build.sh`, args, { cwd: __dirname });

	this.proc.on('error', err => {
		console.error(`    Error on build ${buildName}: ${err}`);
		this.proc.kill('SIGUSR1'); // means the build had an error
	});

	this.proc.stderr.on('data', chunk => {
		console.error(`    Error on build ${buildName}: ${chunk.toString()}`);
		this.proc.kill('SIGUSR1'); // means the build had an error
	});

	this.proc.on('exit', (code, signal) => {
		this.proc = null;
		if (signal !== 'SIGUSR1') {
			if (code === 0 && signal === null) {
				console.log(`    Completed build ${buildName}`);
			}
			else {
				console.log(`    Stopped build ${buildName}`);
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
// TODO: Build JS and Java in two concurrent child processes to take advantage of multiple CPU cores

const { spawn, ChildProcess } = require('child_process');

const basePath = `${__dirname}/..`;

let { grammar, srcPath, javaPath, jsPath } = require('./settings.json');

grammar = `${basePath}/${grammar}`;
srcPath = `${basePath}/${srcPath}`;
javaPath = `${basePath}/${javaPath}`;
jsPath = `${basePath}/${jsPath}`;

module.exports = function (buildName) {
	console.log(`Build ${buildName} started`);
	this.jsBuild = spawn(`antlr -Dlanguage=JavaScript -o ${jsPath} ${grammar}`, { cwd: srcPath, shell: true });
	this.javaBuild = spawn(`antlr -Dlanguage=Java -o ${javaPath} ${grammar} && cd ${javaPath} && javac *.java`, { cwd: srcPath, shell: true });

	const onError = error => {
		console.error(`Error on build ${buildName}: ${error.toString()}\n`);
		this.jsBuild.kill('SIGUSR1'); // means the build had an error
		this.javaBuild.kill('SIGUSR1');
	};

	this.jsBuild.on('error', onError);
	this.jsBuild.stderr.on('data', onError);
	this.javaBuild.on('error', onError);
	this.javaBuild.stderr.on('data', onError);

	this.jsBuild.on('exit', (code, signal) => {
		this.jsBuild = { code, signal };
		checkExit(this.javaBuild);
	});

	this.javaBuild.on('exit', (code, signal) => {
		this.javaBuild = { code, signal };
		checkExit(this.jsBuild);
	});

	this.callback = null;

	const checkExit = (otherProc) => {
		// Other build process is still running, wait for it, gonna be legendary
		if (otherProc instanceof ChildProcess) {
			return;
		}
		if (this.jsBuild.signal === 'SIGUSR1' || this.javaBuild.signal === 'SIGUSR1') {
			// Error - NOP
		}
		else if (this.jsBuild.signal || this.javaBuild.signal || this.jsBuild.code || this.javaBuild.code) {
			console.log(`Build ${buildName} cancelled\n`);
		}
		else {
			console.log(`Build ${buildName} completed\n`);
		}
		if (this.callback) {
			this.callback();
			this.callback = null;
		}
		this.jsBuild = this.javaBuild = null;
	}

	this.kill = function (callback) {
		this.callback = callback;
		if (this.jsBuild instanceof ChildProcess) {
			this.jsBuild.kill('SIGTERM');
			return;
		}
		if (this.javaBuild instanceof ChildProcess) {
			this.javaBuild.kill('SIGTERM');
			return;
		}
		// If there were no running processes, start new ones
		callback();
	}
}

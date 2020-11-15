#!/usr/bin/env node
const fs = require('fs');
const Build = require('./builder');

// Build numbers to distinguish each build run
let buildNum = 1;

let currentBuild = new Build(buildNum);

const rebuild = () => {
	buildNum++;
	currentBuild = new Build(buildNum);
}

fs.watch(`${__dirname}/../src/wikitext.g4`, event => {
	if (event === 'change') {
		if (currentBuild.proc) {
			currentBuild.kill(rebuild);
		}
		else {
			rebuild();
		}
	}
});
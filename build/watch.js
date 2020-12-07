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

// VSCode fires two consecutive change events when hitting save, and we can't efficiently tell them apart, so whatever.
fs.watch(`${__dirname}/../src/wikitext.g4`, event => {
	if (event === 'change') {
		currentBuild.kill(rebuild);
	}
});

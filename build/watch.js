#!/usr/bin/env node
const fs = require('fs');
const colors = require('colors');
const Build = require('./builder');

// Build numbers to distinguish each build run
let buildNum = 1;

let currentBuild = new Build(rotateColor(buildNum));

const rebuild = () => {
	buildNum++;
	currentBuild = new Build(rotateColor(buildNum));
}

// VSCode fires two consecutive change events when hitting save, and we can't efficiently tell them apart, so whatever.
fs.watch(`${__dirname}/../src/wikitext.g4`, event => {
	if (event === 'change') {
		currentBuild.kill(rebuild);
	}
});

function rotateColor(num) {
	let col = num.toString();
	switch (num % 2) {
		case 0:
			return col.yellow;
		default:
			return col.magenta;
	}
}
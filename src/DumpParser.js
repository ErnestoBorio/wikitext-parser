#!/usr/bin/env node

const fs = require('fs');
const XmlStream = require('xml-stream');

const stream = fs.createReadStream(process.argv[2]);
const xml = new XmlStream(stream);


xml.on('endElement: page', page => {
	if (page.ns != '0') return;
	// let text = page.revision.text.$text;
});


import { wikitextListener } from 'antlr-wiktio';

const titleStack = [];

export default class WiktListener extends wikitextListener {
	constructor() {
		super();
	}

	exitTitle(ctx) {
		
		// console.log(ctx.text().getText(), ctx.titleLevel);
	}

	exitPage(ctx) {
	}
}

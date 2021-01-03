import { wikitextListener } from 'antlr-wiktio';

const titleStack = [];

export default class WiktListener extends wikitextListener {
	constructor() {
		super();
	}

	exitTitle(ctx) {
		for (let i = titleStack.length - ctx.titleLevel; i > 0; i--) {
			titleStack.pop();
		}
		titleStack.push(ctx.text().getText());
		console.log(titleStack.join(' > '));
	}

	enterLong_title(ctx) {
		throw new Error('Six equals titles do even ======Exist====== ?');
	}

	exitPage(ctx) {
	}
}

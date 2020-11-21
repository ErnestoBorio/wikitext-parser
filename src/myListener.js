const { wikitextListener } = require('./antlr/wikitextListener');

class myListener extends wikitextListener {
    constructor() {
        super.constructor();
    }

    enterTitle(ctx) {
        void (0);
    }

    exitTitle(ctx) {
        void (0);
    }
}
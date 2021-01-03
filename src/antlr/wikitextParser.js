// Generated from /Users/petruza/Source/WorDB/wikitext-parser/build/../src/wikitext.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import wikitextListener from './wikitextListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u000ea\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0003\u0002\u0006\u0002\u0014\n\u0002\r\u0002",
    "\u000e\u0002\u0015\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u0003\u001c\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u00042\n\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0005\u0006<\n\u0006\u0007\u0006>\n\u0006\f",
    "\u0006\u000e\u0006A\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007I\n\u0007\u0007\u0007",
    "K\n\u0007\f\u0007\u000e\u0007N\u000b\u0007\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0006\bV\n\b\r\b\u000e\bW\u0005\bZ\n\b\u0003",
    "\t\u0006\t]\n\t\r\t\u000e\t^\u0003\t\u0002\u0002\n\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0002\u0002\u0002h\u0002\u0013\u0003\u0002\u0002",
    "\u0002\u0004\u001b\u0003\u0002\u0002\u0002\u00061\u0003\u0002\u0002",
    "\u0002\b3\u0003\u0002\u0002\u0002\n7\u0003\u0002\u0002\u0002\fD\u0003",
    "\u0002\u0002\u0002\u000eY\u0003\u0002\u0002\u0002\u0010\\\u0003\u0002",
    "\u0002\u0002\u0012\u0014\u0005\u0004\u0003\u0002\u0013\u0012\u0003\u0002",
    "\u0002\u0002\u0014\u0015\u0003\u0002\u0002\u0002\u0015\u0013\u0003\u0002",
    "\u0002\u0002\u0015\u0016\u0003\u0002\u0002\u0002\u0016\u0003\u0003\u0002",
    "\u0002\u0002\u0017\u001c\u0005\u0006\u0004\u0002\u0018\u001c\u0005\n",
    "\u0006\u0002\u0019\u001c\u0005\f\u0007\u0002\u001a\u001c\u0005\u0010",
    "\t\u0002\u001b\u0017\u0003\u0002\u0002\u0002\u001b\u0018\u0003\u0002",
    "\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001b\u001a\u0003\u0002",
    "\u0002\u0002\u001c\u0005\u0003\u0002\u0002\u0002\u001d\u001e\u0007\u0003",
    "\u0002\u0002\u001e\u001f\u0005\u0010\t\u0002\u001f \u0007\u0003\u0002",
    "\u0002 !\b\u0004\u0001\u0002!2\u0003\u0002\u0002\u0002\"#\u0007\u0004",
    "\u0002\u0002#$\u0005\u0010\t\u0002$%\u0007\u0004\u0002\u0002%&\b\u0004",
    "\u0001\u0002&2\u0003\u0002\u0002\u0002\'(\u0007\u0005\u0002\u0002()",
    "\u0005\u0010\t\u0002)*\u0007\u0005\u0002\u0002*+\b\u0004\u0001\u0002",
    "+2\u0003\u0002\u0002\u0002,-\u0007\u0006\u0002\u0002-.\u0005\u0010\t",
    "\u0002./\u0007\u0006\u0002\u0002/0\b\u0004\u0001\u000202\u0003\u0002",
    "\u0002\u00021\u001d\u0003\u0002\u0002\u00021\"\u0003\u0002\u0002\u0002",
    "1\'\u0003\u0002\u0002\u00021,\u0003\u0002\u0002\u00022\u0007\u0003\u0002",
    "\u0002\u000234\u0007\u0007\u0002\u000245\u0005\u0010\t\u000256\u0007",
    "\u0007\u0002\u00026\t\u0003\u0002\u0002\u000278\u0007\b\u0002\u0002",
    "8?\u0005\u0010\t\u00029;\u0007\t\u0002\u0002:<\u0005\u000e\b\u0002;",
    ":\u0003\u0002\u0002\u0002;<\u0003\u0002\u0002\u0002<>\u0003\u0002\u0002",
    "\u0002=9\u0003\u0002\u0002\u0002>A\u0003\u0002\u0002\u0002?=\u0003\u0002",
    "\u0002\u0002?@\u0003\u0002\u0002\u0002@B\u0003\u0002\u0002\u0002A?\u0003",
    "\u0002\u0002\u0002BC\u0007\n\u0002\u0002C\u000b\u0003\u0002\u0002\u0002",
    "DE\u0007\u000b\u0002\u0002EL\u0005\u0010\t\u0002FH\u0007\t\u0002\u0002",
    "GI\u0005\u000e\b\u0002HG\u0003\u0002\u0002\u0002HI\u0003\u0002\u0002",
    "\u0002IK\u0003\u0002\u0002\u0002JF\u0003\u0002\u0002\u0002KN\u0003\u0002",
    "\u0002\u0002LJ\u0003\u0002\u0002\u0002LM\u0003\u0002\u0002\u0002MO\u0003",
    "\u0002\u0002\u0002NL\u0003\u0002\u0002\u0002OP\u0007\f\u0002\u0002P",
    "\r\u0003\u0002\u0002\u0002QZ\u0005\u0010\t\u0002RV\u0005\u0010\t\u0002",
    "SV\u0005\f\u0007\u0002TV\u0005\n\u0006\u0002UR\u0003\u0002\u0002\u0002",
    "US\u0003\u0002\u0002\u0002UT\u0003\u0002\u0002\u0002VW\u0003\u0002\u0002",
    "\u0002WU\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002XZ\u0003\u0002",
    "\u0002\u0002YQ\u0003\u0002\u0002\u0002YU\u0003\u0002\u0002\u0002Z\u000f",
    "\u0003\u0002\u0002\u0002[]\u0007\u000e\u0002\u0002\\[\u0003\u0002\u0002",
    "\u0002]^\u0003\u0002\u0002\u0002^\\\u0003\u0002\u0002\u0002^_\u0003",
    "\u0002\u0002\u0002_\u0011\u0003\u0002\u0002\u0002\r\u0015\u001b1;?H",
    "LUWY^"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class wikitextParser extends antlr4.Parser {

    static grammarFileName = "wikitext.g4";
    static literalNames = [ null, "'=='", "'==='", "'===='", "'====='", 
                            "'======'", "'{{'", "'|'", "'}}'", "'[['", "']]'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, "EOL", "CHAR" ];
    static ruleNames = [ "page", "wikitem", "title", "long_title", "template", 
                         "link", "parameter", "text" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = wikitextParser.ruleNames;
        this.literalNames = wikitextParser.literalNames;
        this.symbolicNames = wikitextParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	page() {
	    let localctx = new PageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, wikitextParser.RULE_page);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 16;
	            this.wikitem();
	            this.state = 19; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << wikitextParser.T__0) | (1 << wikitextParser.T__1) | (1 << wikitextParser.T__2) | (1 << wikitextParser.T__3) | (1 << wikitextParser.T__5) | (1 << wikitextParser.T__8) | (1 << wikitextParser.CHAR))) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wikitem() {
	    let localctx = new WikitemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, wikitextParser.RULE_wikitem);
	    try {
	        this.state = 25;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case wikitextParser.T__0:
	        case wikitextParser.T__1:
	        case wikitextParser.T__2:
	        case wikitextParser.T__3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 21;
	            this.title();
	            break;
	        case wikitextParser.T__5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 22;
	            this.template();
	            break;
	        case wikitextParser.T__8:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 23;
	            this.link();
	            break;
	        case wikitextParser.CHAR:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 24;
	            this.text();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	title() {
	    let localctx = new TitleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, wikitextParser.RULE_title);
	    try {
	        this.state = 47;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case wikitextParser.T__0:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 27;
	            this.match(wikitextParser.T__0);
	            this.state = 28;
	            this.text();
	            this.state = 29;
	            this.match(wikitextParser.T__0);
	            localctx.titleLevel = 0; 
	            break;
	        case wikitextParser.T__1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 32;
	            this.match(wikitextParser.T__1);
	            this.state = 33;
	            this.text();
	            this.state = 34;
	            this.match(wikitextParser.T__1);
	            localctx.titleLevel = 1; 
	            break;
	        case wikitextParser.T__2:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 37;
	            this.match(wikitextParser.T__2);
	            this.state = 38;
	            this.text();
	            this.state = 39;
	            this.match(wikitextParser.T__2);
	            localctx.titleLevel = 2; 
	            break;
	        case wikitextParser.T__3:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 42;
	            this.match(wikitextParser.T__3);
	            this.state = 43;
	            this.text();
	            this.state = 44;
	            this.match(wikitextParser.T__3);
	            localctx.titleLevel = 3; 
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	long_title() {
	    let localctx = new Long_titleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, wikitextParser.RULE_long_title);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(wikitextParser.T__4);
	        this.state = 50;
	        this.text();
	        this.state = 51;
	        this.match(wikitextParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	template() {
	    let localctx = new TemplateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, wikitextParser.RULE_template);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(wikitextParser.T__5);
	        this.state = 54;
	        localctx._text = this.text();
	        localctx.template_name.push(localctx._text);
	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===wikitextParser.T__6) {
	            this.state = 55;
	            this.match(wikitextParser.T__6);
	            this.state = 57;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << wikitextParser.T__5) | (1 << wikitextParser.T__8) | (1 << wikitextParser.CHAR))) !== 0)) {
	                this.state = 56;
	                this.parameter();
	            }

	            this.state = 63;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 64;
	        this.match(wikitextParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	link() {
	    let localctx = new LinkContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, wikitextParser.RULE_link);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(wikitextParser.T__8);
	        this.state = 67;
	        localctx._text = this.text();
	        localctx.template_name.push(localctx._text);
	        this.state = 74;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===wikitextParser.T__6) {
	            this.state = 68;
	            this.match(wikitextParser.T__6);
	            this.state = 70;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << wikitextParser.T__5) | (1 << wikitextParser.T__8) | (1 << wikitextParser.CHAR))) !== 0)) {
	                this.state = 69;
	                this.parameter();
	            }

	            this.state = 76;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 77;
	        this.match(wikitextParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameter() {
	    let localctx = new ParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, wikitextParser.RULE_parameter);
	    var _la = 0; // Token type
	    try {
	        this.state = 87;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 79;
	            this.text();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 83; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 83;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case wikitextParser.CHAR:
	                    this.state = 80;
	                    this.text();
	                    break;
	                case wikitextParser.T__8:
	                    this.state = 81;
	                    this.link();
	                    break;
	                case wikitextParser.T__5:
	                    this.state = 82;
	                    this.template();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 85; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << wikitextParser.T__5) | (1 << wikitextParser.T__8) | (1 << wikitextParser.CHAR))) !== 0));
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	text() {
	    let localctx = new TextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, wikitextParser.RULE_text);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90; 
	        this._errHandler.sync(this);
	        let _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 89;
	        		this.match(wikitextParser.CHAR);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 92; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,10, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

wikitextParser.EOF = antlr4.Token.EOF;
wikitextParser.T__0 = 1;
wikitextParser.T__1 = 2;
wikitextParser.T__2 = 3;
wikitextParser.T__3 = 4;
wikitextParser.T__4 = 5;
wikitextParser.T__5 = 6;
wikitextParser.T__6 = 7;
wikitextParser.T__7 = 8;
wikitextParser.T__8 = 9;
wikitextParser.T__9 = 10;
wikitextParser.EOL = 11;
wikitextParser.CHAR = 12;

wikitextParser.RULE_page = 0;
wikitextParser.RULE_wikitem = 1;
wikitextParser.RULE_title = 2;
wikitextParser.RULE_long_title = 3;
wikitextParser.RULE_template = 4;
wikitextParser.RULE_link = 5;
wikitextParser.RULE_parameter = 6;
wikitextParser.RULE_text = 7;

class PageContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wikitextParser.RULE_page;
    }

	wikitem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WikitemContext);
	    } else {
	        return this.getTypedRuleContext(WikitemContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof wikitextListener ) {
	        listener.enterPage(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wikitextListener ) {
	        listener.exitPage(this);
		}
	}


}



class WikitemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wikitextParser.RULE_wikitem;
    }

	title() {
	    return this.getTypedRuleContext(TitleContext,0);
	};

	template() {
	    return this.getTypedRuleContext(TemplateContext,0);
	};

	link() {
	    return this.getTypedRuleContext(LinkContext,0);
	};

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof wikitextListener ) {
	        listener.enterWikitem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wikitextListener ) {
	        listener.exitWikitem(this);
		}
	}


}



class TitleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wikitextParser.RULE_title;
    }

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof wikitextListener ) {
	        listener.enterTitle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wikitextListener ) {
	        listener.exitTitle(this);
		}
	}


}



class Long_titleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wikitextParser.RULE_long_title;
    }

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof wikitextListener ) {
	        listener.enterLong_title(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wikitextListener ) {
	        listener.exitLong_title(this);
		}
	}


}



class TemplateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wikitextParser.RULE_template;
        this._text = null; // TextContext
        this.template_name = []; // of TextContexts
    }

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterContext);
	    } else {
	        return this.getTypedRuleContext(ParameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof wikitextListener ) {
	        listener.enterTemplate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wikitextListener ) {
	        listener.exitTemplate(this);
		}
	}


}



class LinkContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wikitextParser.RULE_link;
        this._text = null; // TextContext
        this.template_name = []; // of TextContexts
    }

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterContext);
	    } else {
	        return this.getTypedRuleContext(ParameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof wikitextListener ) {
	        listener.enterLink(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wikitextListener ) {
	        listener.exitLink(this);
		}
	}


}



class ParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wikitextParser.RULE_parameter;
    }

	text = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TextContext);
	    } else {
	        return this.getTypedRuleContext(TextContext,i);
	    }
	};

	link = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LinkContext);
	    } else {
	        return this.getTypedRuleContext(LinkContext,i);
	    }
	};

	template = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TemplateContext);
	    } else {
	        return this.getTypedRuleContext(TemplateContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof wikitextListener ) {
	        listener.enterParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wikitextListener ) {
	        listener.exitParameter(this);
		}
	}


}



class TextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wikitextParser.RULE_text;
    }

	CHAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(wikitextParser.CHAR);
	    } else {
	        return this.getToken(wikitextParser.CHAR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof wikitextListener ) {
	        listener.enterText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wikitextListener ) {
	        listener.exitText(this);
		}
	}


}




wikitextParser.PageContext = PageContext; 
wikitextParser.WikitemContext = WikitemContext; 
wikitextParser.TitleContext = TitleContext; 
wikitextParser.Long_titleContext = Long_titleContext; 
wikitextParser.TemplateContext = TemplateContext; 
wikitextParser.LinkContext = LinkContext; 
wikitextParser.ParameterContext = ParameterContext; 
wikitextParser.TextContext = TextContext; 

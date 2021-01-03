// Generated from /Users/petruza/Source/WorDB/wikitext-parser/build/../src/wikitext.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u000eK\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\f\u0006\fD\n\f\r\f\u000e\fE\u0003\f\u0003",
    "\f\u0003\r\u0003\r\u0002\u0002\u000e\u0003\u0003\u0005\u0004\u0007\u0005",
    "\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r",
    "\u0019\u000e\u0003\u0002\u0003\u0004\u0002\f\f\u000e\u000f\u0002K\u0002",
    "\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002",
    "\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002",
    "\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002",
    "\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002",
    "\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002",
    "\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0003",
    "\u001b\u0003\u0002\u0002\u0002\u0005\u001e\u0003\u0002\u0002\u0002\u0007",
    "\"\u0003\u0002\u0002\u0002\t\'\u0003\u0002\u0002\u0002\u000b-\u0003",
    "\u0002\u0002\u0002\r4\u0003\u0002\u0002\u0002\u000f7\u0003\u0002\u0002",
    "\u0002\u00119\u0003\u0002\u0002\u0002\u0013<\u0003\u0002\u0002\u0002",
    "\u0015?\u0003\u0002\u0002\u0002\u0017C\u0003\u0002\u0002\u0002\u0019",
    "I\u0003\u0002\u0002\u0002\u001b\u001c\u0007?\u0002\u0002\u001c\u001d",
    "\u0007?\u0002\u0002\u001d\u0004\u0003\u0002\u0002\u0002\u001e\u001f",
    "\u0007?\u0002\u0002\u001f \u0007?\u0002\u0002 !\u0007?\u0002\u0002!",
    "\u0006\u0003\u0002\u0002\u0002\"#\u0007?\u0002\u0002#$\u0007?\u0002",
    "\u0002$%\u0007?\u0002\u0002%&\u0007?\u0002\u0002&\b\u0003\u0002\u0002",
    "\u0002\'(\u0007?\u0002\u0002()\u0007?\u0002\u0002)*\u0007?\u0002\u0002",
    "*+\u0007?\u0002\u0002+,\u0007?\u0002\u0002,\n\u0003\u0002\u0002\u0002",
    "-.\u0007?\u0002\u0002./\u0007?\u0002\u0002/0\u0007?\u0002\u000201\u0007",
    "?\u0002\u000212\u0007?\u0002\u000223\u0007?\u0002\u00023\f\u0003\u0002",
    "\u0002\u000245\u0007}\u0002\u000256\u0007}\u0002\u00026\u000e\u0003",
    "\u0002\u0002\u000278\u0007~\u0002\u00028\u0010\u0003\u0002\u0002\u0002",
    "9:\u0007\u007f\u0002\u0002:;\u0007\u007f\u0002\u0002;\u0012\u0003\u0002",
    "\u0002\u0002<=\u0007]\u0002\u0002=>\u0007]\u0002\u0002>\u0014\u0003",
    "\u0002\u0002\u0002?@\u0007_\u0002\u0002@A\u0007_\u0002\u0002A\u0016",
    "\u0003\u0002\u0002\u0002BD\t\u0002\u0002\u0002CB\u0003\u0002\u0002\u0002",
    "DE\u0003\u0002\u0002\u0002EC\u0003\u0002\u0002\u0002EF\u0003\u0002\u0002",
    "\u0002FG\u0003\u0002\u0002\u0002GH\b\f\u0002\u0002H\u0018\u0003\u0002",
    "\u0002\u0002IJ\u000b\u0002\u0002\u0002J\u001a\u0003\u0002\u0002\u0002",
    "\u0004\u0002E\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class wikitextLexer extends antlr4.Lexer {

    static grammarFileName = "wikitext.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'=='", "'==='", "'===='", "'====='", "'======'", 
                         "'{{'", "'|'", "'}}'", "'[['", "']]'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, null, null, "EOL", "CHAR" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "T__8", "T__9", "EOL", "CHAR" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

wikitextLexer.EOF = antlr4.Token.EOF;
wikitextLexer.T__0 = 1;
wikitextLexer.T__1 = 2;
wikitextLexer.T__2 = 3;
wikitextLexer.T__3 = 4;
wikitextLexer.T__4 = 5;
wikitextLexer.T__5 = 6;
wikitextLexer.T__6 = 7;
wikitextLexer.T__7 = 8;
wikitextLexer.T__8 = 9;
wikitextLexer.T__9 = 10;
wikitextLexer.EOL = 11;
wikitextLexer.CHAR = 12;




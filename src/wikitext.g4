grammar wikitext;

/**
 Grammar
 */

page: wikitem+;

wikitem: title | template | link | text;

title: title2 | title3 | title4 | title5;
title5: '=====' text '=====';
title4: '====' text '====';
title3: '===' text '===';
title2: '==' text '==';

template:
	'{{' template_name += text ('|' parameter?)* '}}';
link:
	'[[' template_name += text ('|' parameter?)* ']]';

parameter: 
	text
	| (text | link | template)+
	;

text: CHAR+;

/**
 Lexicon
 */

EOL: [\f\r\n]+ -> skip;
CHAR: .;
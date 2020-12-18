grammar wikitext;

/**
 Grammar
 */

page: wikitem+;

wikitem: 
	  text
	| title 
	;

title: title2 | title3 | title4 | title5;
title5: '=====' text '=====';
title4: '====' text '====';
title3: '===' text '===';
title2: '==' text '==';

text: CHAR+;

CHAR: .;
grammar wikitext;

/**
 Grammar
 */

page: (line EOL)+ EOF;

line: title | template;

title: title2 | title3 | title4 | title5;
title5: '=====' name '=====';
title4: '====' name '====';
title3: '===' name '===';
title2: '==' name '==';

template: '{{' template_name ('|' template_parameter?)* '}}';

template_name: name;

template_parameter: name;

name: COMMON_CHAR+;

/**
 Lexicon
 */

EOL: [\r\n]+;
COMMON_CHAR: ~[|<>{}];
CATCH_ALL: .;
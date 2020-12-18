grammar wikitext;

/**
 Grammar
 */

page: EOL? (wikitem EOL? )+ EOF;

wikitem:
      wikitem wikitem
    | title
    | template
    | link
    | text
    | bullet_line
    ;

title: title2 | title3 | title4 | title5;
title5: '=====' text '=====';
title4: '====' text '====';
title3: '===' text '===';
title2: '==' text '==';

template: '{{' parameter ('|' parameter)* '}}';
link: '[[' parameter ('|' parameter)* ']]';

parameter: wikitem?; // parameter can be empty, I.E. {{a|}}

bullet_line: WS? bullet=('*'|'#'|'#:'|'#*') WS? wikitem;

text: (CHAR | WS)+;

/**
 Lexicon
 */
EOL: [\f\r\n]+;
CHAR: ~[ \t\f\r\n];
WS: [ \t]+;
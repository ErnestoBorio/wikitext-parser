grammar wikitext;

/**
 Grammar
 */

page: (line EOL)+ EOF;

line: title | wikitext | bullet_line;

title: title2 | title3 | title4 | title5;
title5: '=====' text '=====';
title4: '====' text '====';
title3: '===' text '===';
title2: '==' text '==';

wikitext: (SPACE* wikitext_piece SPACE*)+;
wikitext_piece: template | link | text;

template: '{{' template_name ('|' template_parameter?)* '}}';
template_name: identifier;
template_parameter: wikitext;

link: '[[' linked_page ('|' link_parameter?)* ']]';
linked_page: text;
link_parameter: wikitext;

bullet_line: BULLET wikitext;

identifier: CHAR+;

text: CHAR+;

/**
 Lexicon
 */
EOL: [\r\n]+;
CHAR: .;
BULLET: ('*' | '#' | '#:' | '#*');
SPACE: ' ';
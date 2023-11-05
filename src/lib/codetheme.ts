const colors = {
	bg: "#171b20",
	blue: "#70a5eb",
	magenta: " #c68aee",
	yellow: "#f1cf8a",
	green: "#78dba9",
	red: "#e05f65",
	cyan: "#74bee9",
};

const theme = `<style>
  pre code.hljs {
    display: block;
    overflow-x: auto;
    padding: 1em
  }
  code.hljs {
    padding: 3px 5px
  }
  pre code.hljs {
    display: block;
    overflow-x: auto;
    padding: 1em
  }
  code.hljs {
    padding: 3px 5px
  }
  .hljs {
    color: #b6beca;
	bacgkround: ${colors.bg};
  }
  .hljs::selection,
  .hljs ::selection {
    background-color: #32374D;
    color: #b6beca
  }

  /* base03 - #676E95 -  Comments, Invisibles, Line Highlighting */
  .hljs-comment {
    color: #676E95
  }
  /* base04 - #8796B0 -  Dark Foreground (Used for status bars) */
  .hljs-tag {
    color: #8796B0
  }
  /* base05 - #b6beca -  Default Foreground, Caret, Delimiters, Operators */
  .hljs-subst,
  .hljs-punctuation,
  .hljs-operator {
    color: #b6beca
  }
  .hljs-operator {
    opacity: 0.7
  }
  /* base08 - Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted */
  .hljs-bullet,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-selector-tag,
  .hljs-name,
  .hljs-deletion {
    color: ${colors.red}
  }
  /* base09 - Integers, Boolean, Constants, XML Attributes, Markup Link Url */
  .hljs-symbol,
  .hljs-number,
  .hljs-link,
  .hljs-attr,
  .hljs-variable.constant_,
  .hljs-literal {
    color: ${colors.yellow}
  }
  /* base0A - Classes, Markup Bold, Search Text Background */
  .hljs-title,
  .hljs-class .hljs-title,
  .hljs-title.class_ {
    color: ${colors.yellow}
  }
  .hljs-strong {
    font-weight: bold;
    color: ${colors.yellow}
  }
  /* base0B - Strings, Inherited Class, Markup Code, Diff Inserted */
  .hljs-code,
  .hljs-addition,
  .hljs-title.class_.inherited__,
  .hljs-string {
    color: ${colors.green}
  }
  /* base0C - Support, Regular Expressions, Escape Characters, Markup Quotes */
  /* guessing */
  .hljs-built_in,
  .hljs-doctag,
  .hljs-quote,
  .hljs-keyword.hljs-atrule,
  .hljs-regexp {
    color: ${colors.cyan}
  }
  /* base0D - Functions, Methods, Attribute IDs, Headings */
  .hljs-function .hljs-title,
  .hljs-attribute,
  .ruby .hljs-property,
  .hljs-title.function_,
  .hljs-section {
    color: ${colors.blue}
  }
  /* base0E - Keywords, Storage, Selector, Markup Italic, Diff Changed */
  /* .hljs-selector-id, */
  /* .hljs-selector-class, */
  /* .hljs-selector-attr, */
  /* .hljs-selector-pseudo, */
  .hljs-type,
  .hljs-template-tag,
  .diff .hljs-meta,
  .hljs-keyword {
    color: ${colors.magenta}
  }
  .hljs-emphasis {
    color: ${colors.magenta};
    font-style: italic
  }
  /* for v10 compatible themes */
  .hljs-meta .hljs-keyword,
  .hljs-meta-keyword {
    font-weight: bold
  }</style>`;

export default theme;

#Split files#
**split sections of code into separate files and folders.**

Split files can split sections from input file to separate files and folders. This feature is useful if you want to store multiple parts of code in one file and export them into separate files.

Example usage: writing component which combine html, javaScript, css and documentation in one file and split each section into file with proper extension (like component.html, component.js, .component.css, ./doc/component_readme.md).

##Installation##
`
npm install splitfiles
`

and then

`
var splitfile = require('splitfile');

splitfile('/path/to/source/file/some.source');
`

##Example file##
```
<splitSection output="style/style.css">
  /* code for style.css file goes here... */
</splitSection>

<splitSection output="pages/main.html">
  <!-- code for main.html goes here... -->
</splitSection>

<splitSection output="scripts/script.js">
  // code for script.js goes here...
</splitSection>
```

##Additional notes##
- Output attribute is relative to the path of source file.
- Output code is automatically trimmed from new lines at begin and end of code.

If you find this project useful, you can always drop me a line at http://prettyminimal.com or http://dariuszsikorski.pl

var fs = require('fs-extra');

module.exports = splitFile;

function splitFile(filepath){

  var sourcePath = filepath.replace("/", "\\");
  var sourceFolder = sourcePath.substr(0, sourcePath.lastIndexOf("\\")+1);

  // load source file
  fs.readFile( sourcePath, function (err, data) {
    if (err) {
      throw err;
    }
    parseXML(data.toString());
  });

  // parse source as xml
  function parseXML(source){

    // define regex of sections
    var regex = new RegExp(/<splitSection output=\"(.*)\">([\s\S]*?)<\/splitSection>/gmi);

    // loop through each section
    var result;
    while((result = regex.exec(source)) !== null) {

      var sectionCode = result[0];
      var outputAttr = result[1];

      // ensure output attribute is defined
      if(outputAttr == "" || outputAttr == null || outputAttr == "undefined"){
        console.log("[Warning] Ignoring section. All split sections need the output attribute");
        console.log("section code: " + sectionCode.substr(0, 100) + "...");
      } else {

        // create output path relative to source file
        var outputPath = (sourceFolder + outputAttr).replace("/", "\\");

        // remove first and last newline characters
        sectionCode = sectionCode.replace(/^\s+|\s+$/g, '');
        // save file
        fs.outputFile(outputPath, sectionCode, function (err) {
          if(err){
            console.log("error: " + err);
          }
        });
      }
    }
  }
}
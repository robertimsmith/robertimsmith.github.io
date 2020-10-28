var fs = require("fs");

function writeTextFile(output)
{
  fs.writeFile("log.txt", "Entry: " + output, function(err){
    if (err){
      return console.error(err);
    }
  })
}
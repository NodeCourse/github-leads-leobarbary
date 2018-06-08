
var fs = require('fs');
var csvstringify = require('csv-stringify');

function createCSV(users,output){

  csvstringify(users,function(err,userss){
    fs.writeFile(output, userss, 'utf8', function (err) {
      if (err) {
        console.log('Some error occured - file either not saved or corrupted file saved.');
      } else{
        console.log('It\'s saved!');
      }
    });
  });

  return output;
}
module.exports = createCSV;

const client = require("./client");

function getSearchQuery(languages,created){
  let q ='';
  if(typeof languages =='object'){
    languages.forEach(function(l){
      q += 'language:'+l+' ';
    });
  }else if(typeof languages =='string'){
    q = 'language:'+languages;
  }
  let month;
  if(created.getMonth()<10){month ='0'+created.getMonth();}else{month = created.getMonth();}
  let day;
  if(created.getDate()<10){day ='0'+created.getDate();}else{day = created.getDate();}
  q += 'created:>'+created.getFullYear()+'-'+month+'-'+day;
  return q;
}
module.exports = getSearchQuery;

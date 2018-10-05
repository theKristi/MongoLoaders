const fs = require('fs');
const parser =require('./parser');
const jsdom= require("jsdom");
fs.readFile( 'index.html', 'utf8', function(err, strhtml){
   if(err)
    return console.log(err)
    const dom = new jsdom(strhtml)
    let table=dom.window.document.querySelector("[data-list-manipulate]")
    parser(table);
});

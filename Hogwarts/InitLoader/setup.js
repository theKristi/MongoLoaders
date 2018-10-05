const fs = require('fs');
const parser =require('./parser');
const jsdom= require("jsdom");
const { JSDOM } = jsdom;
fs.readFile( 'index.html', 'utf8', function(err, strhtml){
   if(err)
    return console.log(err)
    const dom = new JSDOM(strhtml)
    let table=dom.window.document.querySelector("[data-list-manipulate]")
    parser(table);
});

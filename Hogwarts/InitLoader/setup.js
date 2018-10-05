import {Parser} from "htmlParser.js"
import {fs} from "../../node_modules"

fs.readFile( 'index.html', 'utf8', function(err, html){
    Parser.parse(html);
});

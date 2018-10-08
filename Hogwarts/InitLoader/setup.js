const fs = require('fs');
const parser = require('tabletojson');

fs.readFile( 'InitLoader/index.html', 'utf8', function(err, html){
   if(err)
    return console.log(err)
    const converted = parser.convert(html);
    const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = "mongodb+srv://thekristi:GiveMeAdb123!@cluster0-uas4b.mongodb.net/test?retryWrites=true"
MongoClient.connect(uri, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   const collection = client.db("WizardingWorld").collection("HogwartsStudents");
   //converted.map(())
   client.close();
});
    
});

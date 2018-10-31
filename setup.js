const fs = require('fs');

fs.readFile( 'hogwartsstudents.json', 'utf8', function(err, json){
   if(err)
    return console.log(err)
    const converted = JSON.parse(json);
    const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = "mongodb://theKristi:dbPass123@ds155192.mlab.com:55192/heroku_zrxxmr7z"
MongoClient.connect(uri, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to mlab...\n',err);
   }
   console.log('Connected...');

   
   const collection=client.db("heroku_zrxxmr7z").collection("HogwartsStudents")
   collection.insertMany(converted).then((res)=>{
       console.log(res);
   });
   
   client.close();
});
    
});

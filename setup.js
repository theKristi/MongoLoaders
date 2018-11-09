const fs = require('fs');

fs.readFile( 'hogwartsstudents.json', 'utf8', function(err, json){
   if(err)
    return console.log(err)
    const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = "mongodb://theKristi:dbPass123@ds155192.mlab.com:55192/heroku_zrxxmr7z" 
MongoClient.connect(uri, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to mlab...\n',err);
   }
   console.log('Connected...');
   
   const collection = client.db("heroku_zrxxmr7z").collection("HogwartsStudents");
   const data=JSON.parse(json);
   const dataArray=createArray(data);
    collection.insertMany(dataArray).then((res,err)=>{
        if(err) throw err;
        console.log(res);
    });
   client.close();
});
 let createArray=(data)=>{
     keys=Object.keys(data);
     array=[];
     keys.map((key)=>{array.push(data[key])})
    return array
    }   
});
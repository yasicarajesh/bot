const express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const app = express();
function startServer(){
    var port = process.env.PORT || 8081;

    app.use('/', express.static(path.join(__dirname, '../client')));
    app.use(bodyParser({limit: '50mb'}));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(function(req,res,next){
        console.log("someone opened ur website");
        next();
    });
    app.get('/check',function(req,res){
        res.sendStatus(200);
    });
    app.get('/status',function(req,res){
        res.sendStatus(200);
    });
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname,'..client/index.html'));
    });


    app.listen(port, 
        function() {
            console.log('ToDo app listening on port ' + port +'!');
    });
}
module.exports=startServer;



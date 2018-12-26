'use strict';

let
    express = require('express'),
    bodyParser = require('body-parser'),
    db = require('./config/database'),
    routes = require('./routes/index'),
    app = express(),
    port = process.env.PORT || 5000;
    
    function create() {
            // Returns middleware that parses json
            app.use(bodyParser.json());
            app.set('view engine', 'html');
            app.db = db.db;
            
            // Set up routes    
            routes.init(app);
        };

    function start(){
        db.start();
        app.listen(port, () => console.log(`Listening on port ${port}`));
    };

module.exports = {create, start, app};

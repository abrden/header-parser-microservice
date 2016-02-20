'use strict';

var express = require('express'),
    app = express(),
    routes = require('./app/routes/index.js'),
    port = process.env.PORT || 8080;

routes(app);

app.listen(port, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
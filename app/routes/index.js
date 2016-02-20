'use strict';

module.exports = function (app) {
    app.enable('trust proxy');
    
    app.route('/')
        .get(function (req, res) {

            res.json({
                'ip-address': req.ip,
                'language': req.headers["accept-language"].split(',')[0],
                'software': req.headers['user-agent'].split(') ')[0].split(' (')[1]
            });
            
        });
};

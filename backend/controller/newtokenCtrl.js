var express = require('express');
var db = require('../fn/mysql-db');

var router = express.Router();
var tokenRepo = require('../repo/tokenRepo');



router.post('/createtoken', (req, res) => {
       tokenRepo.initrftoken(req.body.username,req.body.refeshToken,req.body.LOAI).then(rows => {
        if (rows.length > 0) {
            var userEntity=rows[0];
            var acToken = tokenRepo.generateAccessToken(userEntity);
            
            res.json({
                auth: true,
                user: userEntity,
                access_token: acToken,
                refresh_token: req.body.refeshToken
            })
        }
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console');
    })
})
module.exports = router;
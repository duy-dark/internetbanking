var express = require('express');

var accountRepo = require('./../Repo/accountRepo'),
    tokenRepo = require('./../Repo/tokenRepo');


var router = express.Router();

router.post('/userkh/regist', (req, res) => {
    var user = {
        USERNAME: req.body.USERNAME,
        PASSWORD: req.body.PASSWORD,
        NAME: req.body.NAME,
        LOAI: req.body.LOAI
    }
    if (+user.LOAI === 1) {
        user.SDT = req.body.SDT;
        user.EMAIL = req.body.EMAIL;
        accountRepo.addkh(user).then(value => {
                res.statusCode = 201;
                res.json({ added: true });
            })
            .catch(err => {
                res.statusCode = 500;
                console.log(err);
                res.end('View error log on console');
            })
    } else {
        accountRepo.addnv(user).then(value => {
                res.statusCode = 201;
                res.json({ added: true });
            })
            .catch(err => {
                res.statusCode = 500;
                console.log(err);
                res.end('View error log on console');
            })
    }

})
router.post('/userkh/login', (req, res) => {
    var user = {
        USERNAME: req.body.USERNAME,
        PASSWORD: req.body.PASSWORD
    }
    accountRepo.loginkh(user).then(rows => {
        if (rows.length > 0) {
            var userEntity = rows[0];
            dangnhapRepo.updatestatetx(userEntity.ID);
            var actoken = tokenRepo.generateAccessToken(userEntity);
            var rftoken = tokenRepo.generateRefreshToken();
            tokenRepo.updateRefreshToken(userEntity.IDKH, rftoken, 1)
                .then(value => {
                    res.statusCode = 201;
                    res.json({
                        auth: true,
                        user: userEntity,
                        access_token: actoken,
                        refresh_token: rftoken
                    })
                })
                .catch(err => {
                    console.log(err);
                    res.statusCode = 500;
                    res.end('View error log on console');
                })
        } else {
            res.json({
                auth: false
            })
        }
    })
})
router.post('/usernv/login', (req, res) => {
    var user = {
        USERNAME: req.body.USERNAME,
        PASSWORD: req.body.PASSWORD
    }
    accountRepo.loginnv(user).then(rows => {
        if (rows.length > 0) {
            var userEntity = rows[0];
            dangnhapRepo.updatestatetx(userEntity.ID);
            var actoken = tokenRepo.generateAccessToken(userEntity);
            var rftoken = tokenRepo.generateRefreshToken();
            tokenRepo.updateRefreshToken(userEntity.IDKH, rftoken, 2)
                .then(value => {
                    res.statusCode = 201;
                    res.json({
                        auth: true,
                        user: userEntity,
                        access_token: actoken,
                        refresh_token: rftoken
                    })
                })
                .catch(err => {
                    console.log(err);
                    res.statusCode = 500;
                    res.end('View error log on console');
                })
        } else {
            res.json({
                auth: false
            })
        }
    })
})


module.exports = router;
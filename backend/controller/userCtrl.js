var express = require('express');

var accountRepo = require('./../Repo/accountRepo'),
    tokenRepo = require('./../Repo/tokenRepo'),
    accountbankRepo = require('./../Repo/accountbankRepo');

var router = express.Router();

router.post('/regist', (req, res) => {
    var user = {
        USERNAME: req.body.USERNAME,
        PASSWORD: req.body.PASSWORD,
        NAME: req.body.NAME,
        LOAI: req.body.LOAI
    }
    accountRepo.check(user).then(rows => {
        if (rows.length > 0) {
            res.json({ added: false });
        } else {
            if (+user.LOAI === 1) {
                user.SDT = req.body.SDT;
                user.EMAIL = req.body.EMAIL;
                accountRepo.addkh(user).then(value => {
                        var f = function() {
                            var SOTK = Math.floor((Math.random() * 10000000000) + 100000000000 * (Math.floor((Math.random() * 9) + 1)));
                            accountbankRepo.checktk(SOTK).then(value1 => {
                                if (value1.length === 0) {
                                    accountbankRepo.addtk(user.USERNAME, SOTK, 0).then(value2 => {
                                        res.statusCode = 201;
                                        res.json({ added: true });
                                    });
                                } else {
                                    f();
                                }
                            })
                        };
                        f();
                    })
                    .catch(err1 => {
                        res.statusCode = 500;
                        console.log(err1);
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
        }
    }).catch(err => {
        res.statusCode = 500;
        console.log(err);
        res.end('View error log on console');
    })

})
router.post('/login', (req, res) => {
    var user = {
        USERNAME: req.body.USERNAME,
        PASSWORD: req.body.PASSWORD
    }
    accountRepo.loginkh(user).then(rows => {
        if (rows.length > 0) {
            var userEntity = rows[0];
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
            accountRepo.loginnv(user).then(rows1 => {
                console.log(rows1);
                if (rows1.length > 0) {

                    var userEntity = rows1[0];
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
                }else{
                    res.json({login:false});
                }
            })
        }
    })
})



module.exports = router;
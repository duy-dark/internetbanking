var express = require('express');
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var moment = require('moment');

var accountbankRepo = require('./../Repo/accountbankRepo');


var router = express.Router();
router.post('/', (req, res) => {

    var p1 = accountbankRepo.loadttcn(req.body.USERNAME);
    var p2 = accountbankRepo.loadtaikhoan(req.body.USERNAME);
    var p3 = accountbankRepo.loadhistory(req.body.USERNAME);
    var p4 = accountbankRepo.loaddsnn(req.body.USERNAME);
    Promise.all([p1, p2, p3, p4]).then(([rows, rows1, rows2, rows3]) => {

        res.json({
            TTCN: rows[0],
            TK: rows1,
            H: rows2,
            DSNN: rows3
        })
    });
})
router.post('/addtk', (req, res) => {
    var f = function() {
        var SOTK = Math.floor((Math.random() * 10000000000) + 100000000000 * (Math.floor((Math.random() * 9) + 1)));
        accountbankRepo.checktk(SOTK).then(value1 => {
            if (value1.length === 0) {
                accountbankRepo.addtk(req.body.USERNAME, SOTK, 0).then(value2 => {
                    res.statusCode = 201;
                    res.json({ added: true,num:SOTK });
                });
            } else {
                f();
            }
        }).catch(err1 => {
            res.statusCode = 500;
            console.log(err1);
            res.end('View error log on console');
        })
    };
    f();
})

router.post('/gettk', (req, res) => {
    accountbankRepo.gettk(req.body.USERNAME).then(rows => {
        res.statusCode = 201;
        res.json(rows);
    }).catch(err1 => {
        res.statusCode = 500;
        console.log(err1);
        res.end('View error log on console');
    })
})
router.post('/transferOTP', (req, res) => {
    var OTP = Math.floor((Math.random() * 10000) + 100000 * (Math.floor((Math.random() * 9) + 1)));
    var transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: 'duy.mailwork@gmail.com',
            pass: 'quangduy19'
        }
    }))

    var mailOptions = {
        from: 'duy.mailwork@gmail.com',
        to: 'tiendung2013vn97@gmail.com',
        subject: 'Sending OTP',
        text: 'Mã OTP:' + OTP
    }
    accountbankRepo.updateOTP(OTP, req.body.SOTK).then(value => {
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                res.json({ sentemai: true });
            }
        })
    }).catch(err1 => {
        res.statusCode = 500;
        console.log(err1);
        res.end('View error log on console');
    })

})
router.post('/transferaccess', (req, res) => {
    var ck = {
        TKGUI: req.body.TKGUI,
        TKNHAN: req.body.TKNHAN,
        SOTIENNHAN: req.body.SOTIENNHAN,
        TIME: moment().unix(),
        NOIDUNG: req.body.NOIDUNG,
        PHIGIAODICH: 15000,
        NGUOITRAPHI: req.body.NGUOITRAPHI,
        USERNAME: req.body.USERNAME,
        LOAI: 1
    }
    accountbankRepo.checkOTP(+req.body.OTP, ck.TKGUI).then(rows => {
        if (rows.length > 0) {
            accountbankRepo.savehistory(ck).then(value => {
                accountbankRepo.updateTKGUI(ck.SOTIENNHAN, ck.TKGUI).then(value1 => {
                    accountbankRepo.updateTKNHAN(ck.SOTIENNHAN, ck.TKNHAN).then(value2 => {
                        accountbankRepo.updatePGD(ck.PHIGIAODICH, ck.NGUOITRAPHI).then(value3 => {
                            res.json({ transfered: true });
                        })
                    })
                })
            })
        } else {
            res.json({ transfered: false })
        }
    })
})
router.post('/historytransfer', (req, res) => {
    accountbankRepo.gethistory(req.body.SOTK).then(rows => {
        var check = false;
        for (var i = 0; i < rows.length; i++) {
            rows[i].TIME = moment(rows[i].TIME * 1000).format('YYYY-MM-DD HH:mm:ss');
            if (i === rows.length - 1) {
                res.statusCode = 201;
                res.json(rows);
            }
        }
    })
})
router.post('/createdsnn', (req, res) => {
    var nguoinhan = {
        SOTK: req.body.SOTK,
        NAME: req.body.NAME,
        USERNAME: req.body.USERNAME
    }
    if (nguoinhan.NAME.length === 0) {
        accountbankRepo.getUSERNAME(nguoinhan.SOTK).then(rows => {
            nguoinhan.NAME = rows[0].USERNAME;
        })
    }
    accountbankRepo.savedsnn(nguoinhan).then(value => {
        res.statusCode = 201;
        res.json({ nhap: true });
    }).catch(err1 => {
        res.statusCode = 500;
        console.log(err1);
        res.end('View error log on console');
    })
})
router.post('/getnguoinhan', (req, res) => {
    accountbankRepo.getall(req.body.SOTK, req.body.USERNAME).then(rows => {
        res.statusCode = 201;
        res.json(rows[0]);
    }).catch(err1 => {
        res.statusCode = 500;
        console.log(err1);
        res.end('View error log on console');
    })
})
router.post('/updatenguoinhan', (req, res) => {
    var tt = {
        SOTK: req.body.STK,
        NEWSOTK: req.body.NEWSTK,
        NEWNAME: req.body.NEWNAME,
        USERNAME: req.body.USERNAME
    }
    accountbankRepo.updatenn(tt).then(rows => {
        res.statusCode = 201;
        res.json({ updatenn: true });
    }).catch(err1 => {
        res.statusCode = 500;
        console.log(err1);
        res.end('View error log on console');
    })
})
router.post('/closeacountbank', (req, res) => {
    var user = {
        USERNAME: req.body.USERNAME,
        SOTK: req.body.SOTK
    }
    accountbankRepo.deletetk(user).then(value1 => {
        res.json({ deletetk: true });
    }).catch(err1 => {
        res.statusCode = 500;
        console.log(err1);
        res.end('View error log on console');
    })

})

module.exports = router;
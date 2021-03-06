var jwt = require('jsonwebtoken');
var rndToken = require('rand-token');
var moment = require('moment');

var db = require('../fn/mysql-db');

const SECRET = 'ABCDEF';
const AC_LIFETIME = 60; // seconds

exports.generateAccessToken = userEntity => {
    var payload = {
        user: userEntity,
        info: 'more info'
    }

    var token = jwt.sign(payload, SECRET, {
        expiresIn: AC_LIFETIME
    });

    return token;
}

exports.verifyAccessToken = (req, res, next) => {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, SECRET, (err, payload) => {
            if (err) {
                res.statusCode = 401;
                res.json({
                    msg: 'INVALID TOKEN',
                    error: err
                })
            } else {
                req.token_payload = payload;
                next();
            }
        });
    } else {
        res.statusCode = 403;
        res.json({
            msg: 'NO_TOKEN'
        })
    }
}
exports.verifytoken = token => {
    var decoded=jwt.verify(token,SECRET);
    return decoded;
}
exports.generateRefreshToken = () => {
    const SIZE = 80;
    return rndToken.generate(SIZE);
}

exports.updateRefreshToken = (userId, rfToken,userloai) => {
    return new Promise((resolve, reject) => {

        var sql = `delete from userRefreshTokenExt where USERNAME = '${userId}' and LOAI=${userloai}`;
        db.save(sql) // delete
            .then(value => {
                var rdt = moment().format('YYYY-MM-DD HH:mm:ss');
                sql = `insert into userRefreshTokenExt values('${userId}', '${rfToken}', '${rdt}',${userloai})`;
                return db.save(sql);
            })
            .then(value => resolve(value))
            .catch(err => reject(err));
    });
}
exports.initrftoken = (username,refreshtoken, LOAI) => {
    var sql;
    if (LOAI === 1) {
        sql = `select * from khachhang kh,userrefreshtokenext u where u.rfToken='${refreshtoken}' and u.LOAI=1 and u.USERNAME='${username}'`;
    } else {
        sql = `select * from nhanvien nv,userrefreshtokenext u where u.rfToken='${refreshtoken}' and u.LOAI=2 and u.USERNAME='${username}'`;
    }
    return db.load(sql);
}
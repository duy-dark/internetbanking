var db=require('./../fn/mysql-db');
var sha256 = require('crypto-js/sha256');

exports.addkh = user => {
    var md5_password = sha256(user.PASSWORD);
    var sql = `insert into khachhang(NAME, USERNAME, PASSWORD,EMAIL,SDT) 
	values('${user.NAME}','${user.USERNAME}', '${md5_password}', '${user.EMAIL}', '${user.SDT}' )`;
    return db.save(sql);
}
exports.addnv = user => {
    var md5_password = sha256(user.PASSWORD);
    var sql = `insert into nhanvien(NAME, USERNAME, PASSWORD,CHUCVU) 
	values('${user.NAME}','${user.USERNAME}', '${md5_password}','nv')`;
    return db.save(sql);
}
exports.loginkh = user => {
    var md5_password = sha256(user.PASSWORD);
    var sql = `select * from khachhang where USERNAME = '${user.USERNAME}' and PASSWORD = '${md5_password}';`
    return db.load(sql);
}
exports.loginnv = user => {
    var md5_password = sha256(user.PASSWORD);
    var sql = `select * from nhanvien where USERNAME = '${user.USERNAME}' and PASSWORD = '${md5_password}';`
    return db.load(sql);
}

exports.check = user => {
    var sql = `select * from khachhang kh,nhanvien nv where kh.USERNAME = '${user.USERNAME}' OR nv.USERNAME='${user.USERNAME}' ;`
    return db.load(sql);
}


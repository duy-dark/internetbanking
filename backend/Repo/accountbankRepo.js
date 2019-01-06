var db=require('./../fn/mysql-db');
var sha256 = require('crypto-js/sha256');

exports.checktk = SOTK => {
	var sql=`select * from taikhoan where SOTK='${SOTK}'`;	   
    return db.load(sql);
}
exports.addtk = (USERNAME,SOTK,SOTIEN) => {
	var sql=`insert into taikhoan(USERNAME,SOTK,SOTIEN) 
	values('${USERNAME}','${SOTK}',${SOTIEN} )`;	   
    return db.save(sql);
}
exports.gettk = username => {
	var sql=`select * from taikhoan where USERNAME='${USERNAME}'`;	   
    return db.load(sql);
}
exports.updateOTP = (OTP,SOTK) => {
	var sql=`update taikhoan set OTP = ${OTP} where SOTK = '${SOTK}'`;	   
    return db.save(sql);
}
exports.checkOTP = (OTP,SOTK) => {
	var sql=`select* from taikhoan  where SOTK = '${SOTK}' AND OTP=${OTP}`;	   
    return db.save(sql);
}
exports.savehistory = infor => {
	var sql=`insert into history(SOTKGUI, SOTKNHAN, SOTIENGIAODICH,TIME,NOIDUNG,PHIGIAODICH,NGUOITRAPHI) 
	values('${infor.TKGUI}','${infor.TKNHAN}', '${infor.SOTIENNHAN}',${infor.TIME},'${infor.NOIDUNG}',${infor.PHIGIAODICH},'${infor.NGUOITRAPHI}',)`;	   
    return db.save(sql);
}
exports.updateTKGUI = (SOTIEN,SOTK) => {
	var sql=`update taikhoan set SOTIEN = SOTIEN-${SOTIEN} where SOTK = '${SOTK}'`;	   
    return db.save(sql);
}
exports.updateTKNHAN = (SOTIEN,SOTK) => {
	var sql=`update taikhoan set SOTIEN = SOTIEN+${SOTIEN} where SOTK = '${SOTK}'`;	   
    return db.save(sql);
}
exports.updatePGD = (SOTIEN,SOTK) => {
	var sql=`update taikhoan set SOTIEN = SOTIEN-${SOTIEN} where SOTK = '${SOTK}'`;	   
    return db.save(sql);
}
exports.gethistory = SOTK => {
	var sql=`select * from history where SOTKGUI='${SOTK}' ORDER BY TIME ASC`;	   
    return db.load(sql);
}
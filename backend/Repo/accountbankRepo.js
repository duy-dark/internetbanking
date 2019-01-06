var db=require('./../fn/mysql-db');
var sha256 = require('crypto-js/sha256');

exports.getall = (SOTK,USERNAME) => {
	var sql=`select kh.USERNAME,tk.SOTK,kh.EMAIL,kh.NAME as NAMENGUOINHAN,ds.NAME as NAMEGOIY
	from khachhang kh JOIN taikhoan tk on (tk.USERNAME=kh.USERNAME and tk.SOTK='${SOTK}') LEFT JOIN dsnn ds on ds.USERNAME='${USERNAME}'`;	   
    return db.load(sql);
}

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
	var sql=`insert into history(SOTKGUI, SOTKNHAN, SOTIENGIAODICH,TIME,NOIDUNG,PHIGIAODICH,NGUOITRAPHI,USERNAME,LOAI) 
	values('${infor.TKGUI}','${infor.TKNHAN}', '${infor.SOTIENNHAN}',${infor.TIME},'${infor.NOIDUNG}',${infor.PHIGIAODICH},'${infor.NGUOITRAPHI}','${infor.USERNAME}',${infor.LOAI})`;	   
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
exports.getUSERNAME = SOTK => {
	var sql=`select USERNAME from taikhoan where SOTK='${SOTK}'`;	   
    return db.load(sql);
}
exports.savedsnn = nguoinhan => {
	var sql=`insert into history(SOTK, NAME, USERNAME) 
	values('${nguoinhan.SOTK}','${nguoinhan.NAME}','${nguoinhan.USERNAME}')`;	   
    return db.save(sql);
}
exports.loadttcn = USERNAME => {
	 return new Promise((resolve, reject) => {

        var sql = `select * from khachhang where USERNAME='${USERNAME}'`;
        db.load(sql) // delete
            .then(value => {
                if(value.length>0)
                {
                	return db.load(sql);;
                }
                else{
                	 sql = `select * from nhanvien where USERNAME='${USERNAME}'`;
                return db.load(sql);
                }
            })
            .then(value => resolve(value))
            .catch(err => reject(err));
    });
}
exports.loadtaikhoan = USERNAME => {
	var sql=`select * from taikhoan where USERNAME='${USERNAME}'`;	   
    return db.load(sql);
}
exports.loadhistory = USERNAME => {
	var sql=`select * from history where USERNAME='${USERNAME}'  ORDER BY TIME DESC`;	   
    return db.load(sql);
}
exports.loaddsnn = USERNAME => {
	var sql=`select * from dsnn where USERNAME='${USERNAME}'`;	   
    return db.load(sql);
}
exports.loadtt = SOTK => {
	var sql=`select kh.* from khachhang kh,taikhoan tk where tk.SOTK='${SOTK}' and tk.USERNAME=kh.USERNAME`;	   
    return db.load(sql);
}
exports.updatenn = infor => {
    var sql=`update dsnn set SOTK = '${infor.NEWSOTK}', NAME='${infor.NEWNAME}' where SOTK = '${infor.SOTK}' and USERNAME='${infor.USERNAME}'`;     
    return db.load(sql);
}
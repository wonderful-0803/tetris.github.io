let mysql = require('mysql')
exports.base = (sql, data, callback) => {
    let connection = mysql.createConnection({
        host: 'localhost', //本机连接不用改动
        user: 'root', //root用户一般默认都有，可以不改
        password: '3.141592653', //改成自己的密码
        port: "3306",
        database: 'tetrisdb' //改成自己的数据库名（注意数据库名和表名的区别）
    })
    connection.connect();
    //创建数据库
    connection.query("create table if not exists Login\
     (`username` varchar(16) unique not null,`password` varchar(16) not null);", (error, results, fields) => {
        if (error) throw error; {
            console.log(error)
        }
        console.log(results)
    })
    connection.query(sql, data, (error, results, fields) => {
        if (error) {
            console.log(error)
        }
        console.log(results)
        callback && callback(results, error)
    })
    connection.end();
}



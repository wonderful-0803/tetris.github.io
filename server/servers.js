const db = require('./db.js')
exports.start = (req, res) => {}
    // 登录注册处理
exports.login = (req, res) => {
    let username = req.body.username
    let pwd = req.body.password
        // 查询语句
    let sql = 'select * from Login where username = ?'
    db.base(sql, username, (result, error) => {
        if (!result.length) {
            return res.json({ status: 0, msg: '登录失败' })
        } else {
            // [ RowDataPacket { password: '123', username: 'admin', id: 1 } ]
            if (result[0].password == pwd) {
                return res.json({ status: 1, msg: '登录成功' })
            }
            return res.json({ status: 1, msg: '密码错误' })
        }
    })
}
exports.register = (req, res) => {
    let username = req.body.username
    let pwd = req.body.password
        // 插入语句
    let sql = 'insert into Login values(?,?)'
    try {
        db.base(sql, [username, pwd], (result, error) => {
            if (error) {
                console.log(result)
                console.log(error + "12345323")
                return res.json({ status: 0, msg: error.sqlMessage })
            } else {
                return res.json({ status: 1, msg: "注册成功" })
            }
        })
    } catch (err) {
        console.log(err)
    }

}

// sqlmap.js SQL语句映射文件，这里主要是对数据库的增改查操作。
var sqlMap = {
  // home
  home: {
    search: 'select * from tetrisuser', // 查询语句一直有问题，node一直报错，目前还在找解决方案。
    add: 'insert into tetrisuser (useId,username,userpwd) values (?,?,?)',
    update: 'update tetrisuser set'
    
  },
  other:{
    delete:'', // delete sql语句
    post: '',
    get: ''
  }
}
module.exports = sqlMap

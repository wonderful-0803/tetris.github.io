// sqlmap.js
var sqlMap = {
  // home
  home: {
    search: 'select * from zp_list',
    add: 'insert into zp_list(name) values (?)'
  },
  other:{
    delete:'', // delete sql语句
    post: '',
    get: ''
  }
}
module.exports = sqlMap

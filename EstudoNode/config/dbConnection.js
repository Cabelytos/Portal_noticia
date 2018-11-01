var mysql = require('mysql');

var connMySQL = () =>{
  return mysql.createConnection ({
      host : 'localhost',
      user :'root',
      password  : '25262526',
      database  : 'portal_noticias'
  }); //estrutura JSON
}
module.exports = () => {
  return connMySQL;
}


//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YourRootPassword';

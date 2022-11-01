import mysql from 'mysql'

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: '3310',
  database: 'a'
})

conexion.connect((error) => {
  if (error) {
    throw error
  } else {
    console.log('conectado DB uvub');
  }
})

export default conexion
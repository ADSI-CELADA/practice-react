import conexion from '../database/db.js'

export const user = async (req, res) => {
  let {id} = req.params
  conexion.query('SELECT * FROM users WHERE id = ?', [id], (error, rows) => {
    if (!error) {
      return res.json({data : rows})
    } else {
      return res.json({data : error})
    }
  })
}

export const users = async (req, res) => {
  conexion.query('SELECT * FROM users', (error, rows) => {
    if (rows) {
      return res.json({data : rows})
    } else {
      return res.json({data : error})
    }
  })
}

export const createUser = async(req, res) => {
  let {usuario, correo, password} = req.body
  conexion.query('INSERT INTO users (usuario, correo, password) VALUES (?, ?, ?)', [usuario, correo, password], (error, rows) => {
    if (!error) {
      return res.json({data : "INSERT_DATA"})
    } else {
      return res.json({data : "ERROR_INSERT"})
    }
  })
}

export const editUser = async (req, res) => {
  let {usuario, correo, password} = req.body
  let id = req.params.id
  conexion.query('UPDATE users SET ? WHERE id = ?', [{usuario, correo, password}, id], (error, rows) => {
    if (!error) {
      return res.json({data : "USER_UPDATE"})
    } else {
      return res.json({data : "UPDATE_ERROR", error})
    }
  })
}

export const deleteUser = async (req, res) => {
  let {id} = req.params
  conexion.query('DELETE FROM users WHERE id = ?', [id], (error, rows) => {
    if (!error) {
      return res.json({data : "USER_DELETE"})
    } else {
      return res.json({data : "DELETE_ERROR"})
    }
  })
}
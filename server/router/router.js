import express from 'express'
import {user, users, createUser, editUser, deleteUser} from '../controllers/Users.js'

const routerUser = express.Router()

routerUser.get('/user/:id', user)
routerUser.get('/users', users)
routerUser.post('/createUser', createUser)
routerUser.put('/editUser/:id', editUser)
routerUser.delete('/deleteUser/:id', deleteUser)




export default routerUser


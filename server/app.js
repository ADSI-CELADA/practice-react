import express, { json } from 'express'
import routerUser from './router/router.js'
import cors from 'cors'

const app = express()
const port = 3001

// -> Middlewares <-
app.use(json())
app.use(cors()) 
app.use(routerUser)

app.listen(port, () => {
  console.log(`Server running uvu ${port}`);
})

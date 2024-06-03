const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
app.use(express.json())
const port = process.env.PORT
const userRoute = require('./routes/users')


const  dbConnect  = require('./db/connection')
dbConnect()

app.use(cors())
app.use(userRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
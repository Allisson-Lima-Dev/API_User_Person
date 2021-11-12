require('dotenv').config()
const express = require('express')

const app = express()

const cors = require('cors')
app.use(cors)

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

//rota da api
const personRouter = require('./routes/personRoutes')

app.use('/person', personRouter)


app.get('/', (req, res) => {
    res.json({ msg: 'Oi express, deu certo!!!' })
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("Server runnig! on Port: " + PORT)
})
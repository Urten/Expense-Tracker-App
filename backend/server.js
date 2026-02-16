require('dotenv').config();
const {init_db} = require("./config/config")
const express = require("express")
const userRoutes = require("./routes/user.routes")

const app = express()
const PORT = process.env.port || 3000;

app.use(express.json())

app.use('/api/users', userRoutes)

async function startServer () {

    await init_db()
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost: ${PORT}`)
    })
}

startServer()
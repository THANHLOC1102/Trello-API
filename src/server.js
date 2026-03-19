import express from "express"

const app = express()
const PORT = process.env.PORT || 3000

const hostname = "localhost"
app.get('/', function (req, res) {
    res.send('<h1>Hello World!</h1>')
})

app.listen(PORT, hostname, () => {
    console.log(`Hello Thanhloc, i'm running server at http://${hostname}:${PORT}`)
})  
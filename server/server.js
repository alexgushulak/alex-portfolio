const express = require('express')
const res = require('express/lib/response')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/info', (req, res) => {
    console.log(req.socket.remoteAddress);
    console.log(req.header('x-forwarded-for'));
    res.status(200).send({
        name: "",
        age: 30,
        address: "1234 Main St"
    })
})

app.listen(port, ()=>{
    console.log(`Server Listening on port ${port}`)
})
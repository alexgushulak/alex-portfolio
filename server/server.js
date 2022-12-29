const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/info', (req, res) => {
    console.log("Some is entering the info route")
    res.status(200).send({
        name: "John Doe",
        age: 30,
        address: "1234 Main St"
    })
})

app.listen(port, ()=>{
    console.log(`Server Listening on port ${port}`)
})
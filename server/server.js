const express = require('express')
const res = require('express/lib/response')
const cors = require('cors')
const geoip = require('geoip-lite')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/info', (req, res) => {
    console.log(req.socket.remoteAddress);
    var ip = req.header('x-forwarded-for');
    var geo = geoip.lookup(ip);
    console.log(`IP-Address: ${req.header('x-forwarded-for')}`);
    console.log(geo);
    res.status(200).send({
        name: "",
        age: 30,
        address: "1234 Main St"
    })
})

app.listen(port, ()=>{
    console.log(`Server Listening on port ${port}`)
})

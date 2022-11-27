const express = require('express')
let cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
//비워두면 모든 요청에 대해서 허용한다.

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params
    if(name==="dog"){
        res.send({'sound': '몽몽'})
    } else if (name==="cat") {
        res.send({'sound': '애옹'})
    } else if (name==="pig") {
        res.send({'sound': '꾸르꾸르'})
    } else {
        res.send({'sound': '모릅니다'})
    }
})

app.get('/dog', (req, res) => {
    res.send({'sound': '몽몽'})
})

app.get('/cat', (req, res) => {
    res.send({'sound': '애옹'})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
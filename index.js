const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/user/:id', (req, res) => {
    // const q = req.params; //위에 :id 했으므로 {id: 적은아이디} 이런식으로 값을 받는다.
    // console.log(q);
    const q = req.query
    //http://localhost:3000/user/ryongryong?q=settime&name=zeriong&age=250
    //이렇게 쿼리를 전달해줬기 때문에 { q: 'settime', name: 'zeriong', age: '250' }를 반환한다.
    console.log(q);

    res.send({'userid': q.id})
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
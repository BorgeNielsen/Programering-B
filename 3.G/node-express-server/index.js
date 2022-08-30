
const express = require('express')
const app = express()
const port = 1337

app.get('/', (req, res)=>{
    res.send('https://youtu.be/pxw-5qfJ1dk')
})
app.get('/itadmin/*', (req, res)=>{
    res.send('Der er hemmelig info: ' + req.params[0])
})

app.listen(port, ()=>{
    console.log('Express server is now running on port: ' + port)
})

const express = require('express')
const port = 1337
const app = express()

const helmut = {
    'tær': 'mange',
    'øjne': 'gule',
    'pels': 'meget sort med 15 hvide hår på brystet'
}

console.log('kurt')

//server en statisk mappe i roden
app.get('/', express.static('public'))

app.get('/api/*', (req,res)=>{
    console.log('Der er nogle der kommer og siger hej')
    if(req.params[0]){
        console.log('Nogle vil vide: ' + req.params[0] + ' om Helmut')
        if(helmut[req.params[0]]){
            res.send(helmut[req.params[0]])
        }else{
            res.send(req.params[0] + ' er ikke info om HELMUT!')
        }

        res.send(req.params[0])
    }
})

app.listen(port, ()=>{
    console.log('Server lyer på port: ' + port)
})
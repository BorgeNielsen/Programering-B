//hent bibliootek IP
const ip = require('ip')
console.log(ip.address())
//hent biblioteket express og gem objektet i konstanten
const express = require('express')
//opret en varialbe til express serveren
const app = express()
//definerer en port
const port = 1337
//vi laver en meget simple database
const weekDays = {
    'mandag': 'Jeg har det skoletræt og normal træt',
    'tirsdag': 'Jeg har det i den grad',
    'onsdag': 'Jeg har en kort skole dag så jubi? i guess? >:-<',
    'torsdag': 'Jeg har det godt',
    'fredag': 'Jeg har det lidt bedre end torsdag',
    'lørdag': 'Jeg har det ok',
    'søndag': 'Jeg har det ikke optimalt'
}
//start en web server på port 1337
app.get('/*', (req, res)=>{
    console.log('Serverne fik besøg i roden')
    if(req.params[0]){
        console.log('WOW nogen vil bruge vores api: ' + req.params[0])
    if(weekDays[req.params[0]]){
        res.send(weekDays[req.params[0]])
    }else{
        res.send(req.params[0] + ' is NOT an api endpoint')
    }

        res.send(req.params[0])
    }else{
        res.send('Du besøgte mig da i min rod ;)')
}
   
})
app.listen(port, ()=>{
    console.log('Server lyer på port: ' + port)
})
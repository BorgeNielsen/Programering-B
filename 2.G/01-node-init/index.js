console.log('hej')

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

const mqtt = require('mqtt')
const client  = mqtt.connect('wss://mqtt.nextservices.dk')

client.on('connect', function () {
  console.log('connected to next services')
  console.log('subscribing to topic programmering')
  client.subscribe('programmering')
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  //client.end()
})
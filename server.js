const express = require('express')
const app = express()
const port = 3000

app.get('/greeting/:firstname/', (req, res) => {
    console.log(req.params)
    res.send(`Howdy pardner. Good to see you ${req.params.firstname}!!`)
})

app.get('/tip/:total/:tipPercentage/', (req, res) => {
    console.log(req.params)
    console.log(req.params)
    
    let percentage = req.params.tipPercentage / 100
    let tip = req.params.total * percentage
    res.send(`Your suggested gratuity amount is: ${tip} dollars.`)
})




app.listen(port, () => {
    console.log(``)
})
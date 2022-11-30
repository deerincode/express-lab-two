const express = require('express')
const app = express()
const port = 3000

app.get('/greeting/:firstname/', (req, res) => {
    console.log(req.params)
    res.send(`Howdy pardner. Good to see you ${req.params.firstname}!!`)
})




app.listen(port, () => {
    console.log(``)
})
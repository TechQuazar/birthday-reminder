const express = require('express')
const app = express()

app.get("/", (req, res) => res.send("Hello world!"))

app.use('/people',require('./routes/people'));

const port = 3000
app.listen(port, () => {
    console.log(`Birthday-Reminder app listening at http://localhost:${port}`)
  })
require ('dotenv').config()
const express = require('express') // Another syntax for import statement
const app = express() // To access items inside this express
// const port = 3000 // Port to listen upon. Some are free, while some are busy. You may change also.

app.get('/', (req, res) => { // "get" a request. First paramter is is where to act (here, '/' i.e. home)
    // Second paramter is a callback function. For request (here, 'req') we will send a response (here, 'res')
  res.send('Hello World!') // Sending response as "Hello World"
})

app.get('/india', (req,res)=>{
    res.send('<img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"/>');
})

app.listen(process.env.PORT, () => { // Listening on port(hre, given above as 3000)
  console.log(`Example app listening on port ${port}`) // If succesfully listened then do this.
})
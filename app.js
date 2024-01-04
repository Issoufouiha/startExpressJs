const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());


const myMiddleware = (req,res,next) =>{
  res.send('Ok');
  console.log(Date.now());
  next();
}
app.get('/', (req, res) => {
  res.send("wello word")
})
app.get('/user',myMiddleware, (req, res) => {
  console.log(req.body);
  res.end('myUers');
})
app.use((req, res)=>{
  res.send('errreur de route')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);

}) 
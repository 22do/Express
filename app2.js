const express = require('express')
const app = express()
const port = 5000

let arr = []

function randomNumber(){
  return Math.floor(Math.random()*89999)+10000
}

app.get('/',(req, res)=>{
 res.send('<h1>student API</h1>')
})

app.get('/new/:firstName/:lastName',(req, res)=>{
  let namaDepan = req.params.firstName
  let namaBelakang = req.params.lastName
  let object = {id: randomNumber(), firstName: namaDepan, lastName: namaBelakang }
  res.json(object)
  arr.push(object)
})

app.get('/students',(req, res)=>{
  res.json(arr)
})

app.get('/student/:idStudent',(req, res)=>{
  let idss = req.params.idStudent
  let hasil 
  let tulisan = []
  let ids = (x) => {
    for(let i = 0; i<arr.length; i++){
      if(arr[i].id == x){
        tulisan = arr[i]
        hasil = arr[i].id
        return true
      }
    }
  }
  let ketemu = ids(idss)
  if(ketemu){
    res.json(tulisan)
  }
  else{
    res.status(404)
    res.send('Page Not Found')
  }
})

app.listen(port, () => {
  console.log("Berhasil");
});
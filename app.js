const express = require('express')
const app = express()
const port = 3000

let arr = [
  {id : 33, name : 'Jhon'},
  {id : 90 ,name : 'Cena'},
  {id : 115 ,name : 'The Rock'}
]


app.get('/',(req,res)=>{
  //res.send('<h1>Hello Silahkan Ketik</h1> localhost:3000/welcome')
  res.sendFile('./index.html',{root: __dirname})
})

app.get('/students',(req,res)=>{
  res.json(arr)
  //res.sendFile('./daftar murid.html',{root: __dirname})
})

app.get('/student/:idNyaStudent',(req,res)=>{
  console.log(req.params.idNyaStudent)
  let id = req.params.idNyaStudent
  let hasil = 00000000000
  let tulisan = []
  let ids = (x) => {
    for(let i = 0; i<arr.length; i++){
      if(arr[i].id == x){
        tulisan = arr[i]
        hasil += arr[i].id
        console.log(hasil)
        return true
      }
    }
  }
  let ketemu = ids(id)
  if(ketemu){
    res.send(tulisan)//to do
  }
  else{
    res.status(404)
    res.send('Page Not Found')
  }
})

app.listen(port, () => {
console.log('Berhasil')
})
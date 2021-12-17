let arr = []

function randomNumber(){
  return Math.floor(Math.random()*99999)+10000
}

console.log(randomNumber())

// app.get('/new/:firstName/:lastName',(req, res)=>{
//   res.send(buatObject)
// })

//route 2
//let namaDepan = req.param.firstName
//let namaBelakang = req.param.lastName
//let object = {id: randomNumber(), firstName: namaDepan, lastName:namaBelakang }
//res.send(object)
//arr.push(object)

//route 3
//res.json(arr)

// app.get('/student/:idStudent',(req, res)=>{
//   res.send()
//   })

//route 4
//let id = req.param.idStudent
// let hasil 
// let tulisan = []
// let ids = (x) => {
//   for(let i = 0; i<arr.length; i++){
//     if(arr[i].id == x){
//       tulisan = arr[i]
//       hasil = arr[i].id
//       return true
//     }
//   }
// }
// let ketemu = ids(id)
// if(ketemu){
//   res.json(tulisan)
// }
// else{
//   res.status(404)
//   res.send('Page Not Found')
// }
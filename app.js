const express = require("express");
const app = express();
const port = 3000;

let arr = [
  { id: 33, name: "Jhon" },
  { id: 90, name: "Cena" },
  { id: 115, name: "The Rock" },
];

let hasil;
let tulisan = [];
let ids = (x) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id == x) {
      tulisan = arr[i];
      hasil = arr[i].id;
      return true;
    }
  }
};

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/students", (req, res) => {
  res.json(arr);
});

app.get("/student/:idNyaStudent", (req, res) => {
  console.log(req.params.idNyaStudent);
  let id = req.params.idNyaStudent;
  let ketemu = ids(id);
  if (ketemu) {
    res.json(tulisan);
  } else {
    res.status(404);
    res.send("Page Not Found");
  }
});

app.listen(port, () => {
  console.log("Berhasil");
});

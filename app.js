const express = require("express");
const { send } = require("express/lib/response");
const mysql = require("mysql");

const app = express();
app.use(express.json());


/////////////// CREATE DATA //////////////////////////////////////

app.post("/api/inventario", (req, res) => {
    const data = {id,inventario,equipo,marca,modelo,categoria} = req.body;
    const sql = "INSERT INTO inventario_labing SET ?";
    connection.query(sql, data, (error, results)=>{
    if(error){
        throw error;
    }else{
        res.send(results);
    }
});
});
////////////// READ DATA ////////////////////////////////////////

app.get("/api/inventario", (req, res) => {
  connection.query("SELECT * FROM inventario_labing", (error, filas) => {
    if (error) {
      throw error;
    } else {
      res.send(filas);
    }
  });
});

app.get("/api/inventario/:id", (req, res) => {
  const id = req.params.id;
  connection.query("SELECT * FROM inventario_labing WHERE id = ?",[id], (error, fila)=>{    
    if(error){
      throw error;
    } else{
      res.send(fila);
    }
  })
})


/////////////// UPDATE DATA //////////////////////////////////////




const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "inventario_labing",
});

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Conexion correcta");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

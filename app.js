const express = require('express');
const { send } = require('express/lib/response');
const mysql = require('mysql');

const app = express();

app.get("/", (req,res)=> {
    res.send("Hola mi servidor funciona")
})

app.get("/api/inventario", (req,res)=> {
    connection.query("SELECT * FROM inventario_labing", (error, filas)=> {
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    }
        )
})

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'inventario_labing'

})

connection.connect(err => { 
    if(err) {
        throw err;
    }
    console.log('Conexion correcta');
})




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


const express = require ("express");
const app = express();

const PORT  = 4000;

// Para enlazar un servidor web

app.listen(PORT, ()=>{
    console.log("Aplicacion corriendo en puerto ",PORT);
})
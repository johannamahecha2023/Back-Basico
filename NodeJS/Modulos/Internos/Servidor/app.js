//importar modulo http
const http = require("http");
const fs = require("fs");

//creamos nuestro servidor
const server = http.createServer((req, res) => {
  //leer el archivoindex.html
  fs.readFile("index.html", "utf8", (error, data) => {
    if (error) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end(
        "<h1><center>disculpenos por las molestias, porfavor comuniquese al numero: 3243326731</center><h1>"
      );
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

//creamos el puerto
const puerto=8000;
server.listen(puerto,()=>{
  console.log(`el puerto para ver mi servidor es: http://localhost:${puerto}`)
} )
import 'dotenv/config';
import Express from "express";

const app = Express()

app.get('/', function (req, res) {
  res.set({"content-type": "text/html; charset=utf-8"});
  res.send("<h1>Hola buenas aa qué tal</h1>");
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${process.env.PORT}`);
});
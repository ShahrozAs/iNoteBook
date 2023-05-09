const connection = require("./db");

const express = require("express");
const app = express();
const port = 3000;
// connectToMongo();
app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello world1!')
// })
(async () => await connection())();
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

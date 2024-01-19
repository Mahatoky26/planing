import express from 'express';
import routes from './router/router.js';
import db from './db/db.js';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
app.use(cors());

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);
db.sync({ force: true })
  .then(() => {
    console.log("mande ny DB");
  })
  .catch(err => console.log(err));


app.listen(3000);
console.log("console");
// const express = require("express");
// const cors = require("cors");
// const userRoutes = require("./routes/web");
// const mysql = require("mysql");

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.json("backend");
// });
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "crud",
// });
// app.use("/user", userRoutes);

// app.post("/create", (req, res) => {
//   const sql = "INSERT INTO data (name, email) VALUES (?)";
//   const values = [req.body.name, req.body.email];
//   db.query(sql, [values], (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });

// const PORT = 8081;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud",
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM data";
  db.query(sql, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json("Error");
    }
    return res.json(data);
  });
});

app.post("/create", (req, res) => {
  const sql = "INSERT INTO data (name, email) VALUES (?, ?)";
  const values = [req.body.name, req.body.email];
  db.query(sql, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }
    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log("listening on port 8081");
});

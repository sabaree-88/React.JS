const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/web");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json("backend");
});

app.use("/user", userRoutes);

const PORT = 8081;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

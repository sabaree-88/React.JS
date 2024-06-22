const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/web");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", userRoutes);

app.use("/user", userRoutes);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Internal Server Error" });
});
const PORT = 8081;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

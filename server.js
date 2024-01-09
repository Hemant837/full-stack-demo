const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const authRoutes = require("./routes/auth");
const productsRoutes = require("./routes/products");
const actionsRoutes = require("./routes/actions");

app.use(bodyParser.json());

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.use("/api", authRoutes);
app.use("/api", productsRoutes);
app.use("/api", actionsRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

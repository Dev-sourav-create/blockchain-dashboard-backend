require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const authRoutes = require("./src/routes/auth.routes");
const userRoutes = require("./src/routes/user.routes");
const taskRoutes = require("./src/routes/task.routes");
const blockRoutes = require("./src/routes/block.routes");
const priceRoutes = require("./src/routes/price.route");
const statsRoutes = require("./src/routes/stat.route");
const employeeRoutes = require("./src/routes/employee.routes");

const app = express();
app.use(cors());
app.use(express.json());

//routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/task", taskRoutes);
app.use("/api/block", blockRoutes);
app.use("/api/price", priceRoutes);
app.use("/api/stats", statsRoutes);
app.use("/api/employee", employeeRoutes);

//mongodbUrl
const mongodbUrl = process.env.atlasUrl;
const PORT = process.env.PORT;
mongoose
  .connect(mongodbUrl)
  .then(() => {
    console.log("connected to MongoDb");
    app.listen(PORT, () => {
      console.log("Server running on", PORT);
    });
  })
  .catch((err) => {
    console.error("db connection err", err);
    process.exit(1);
  });

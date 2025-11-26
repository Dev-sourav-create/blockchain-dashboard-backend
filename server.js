require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const authRoutes = require("../back-end/src/routes/auth.routes");
const userRoutes = require("../back-end/src/routes/user.routes.js");
const taskRoutes = require("../back-end/src/routes/task.routes.js");
const blockRoutes = require("../back-end/src/routes/block.routes.js");
const priceRoutes = require("../back-end/src/routes/price.route.js");
const statsRoutes = require("../back-end/src/routes/stat.route.js");
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

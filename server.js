const express = require("express");
const app = express();

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const AllRoutes = require("./server/routes/jokes.routes");
AllRoutes(app);

app.listen(8000, () => console.log("The server is running on port 8000"));
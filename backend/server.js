const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todoRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/todos", todoRoutes);
app.use("/api/contact", contactRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
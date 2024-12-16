const express = require('express');
const app = express();
const Routes = require('./Routes/index'); // Ensure this imports the router correctly

const PORT = 2400;

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use("/", Routes); // Ensure Routes is an Express Router instance

app.use((req, res) => {
    res.status(404).json({ message: "Routes not found" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

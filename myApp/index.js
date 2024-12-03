//1
const Course = require('./route/course.route.js'); // 3b
const Student = require(`./route/student.route.js`);
const cors = require(`cors`);

const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use("/api/course", Course);
app.use("/api/student", Student);
app.use(cors());

const mongoose = require('mongoose');

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/api')

mongoose.connect('mongodb://Student05:Student05@logan', {dbName: 'home05' })
    .then(() => {
        console.log("Connected to the database.");
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    })
    .catch(() => {
        console.log("Failed to connect to the database.");
    });
const express = require('express')
const app = express()
const port = 8081;
const cors = require("cors");
var bodyParser = require('body-parser')
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host: "host",
    database: "database",
    user: "user",
    password: "password"
});

connection.connect();

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(cors());

// Get Todos
app.get('/todos', async (req, res) => {
    if(req.query.id) {
        await connection.query(`select * from todos WHERE id = ?`, [req.query.id], async function(error, results) {
            if(error) throw error;
            if(results[0]) {
                res.send(results[0]);
            } else {
                res.sendStatus(404);
            }
        })
    } else {
        await connection.query(`select * from todos`, async function (error, results) {
            if (error) throw error;
            res.send(results);
        })
    }
})
// Creating a new Todo
app.post('/todos', async (req, res) => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' , hour12: 'true'};

    let todo = {
        id: null,
        name: await req.query.name,
        completed: false,
        date: await date.toLocaleDateString(undefined, options)
    }

    await connection.query(`INSERT INTO todos (name, completed, date) VALUES (?, ?, ?)`, [todo.name, todo.completed, todo.date], async function(error, results) {
        if(error) {
         res.sendStatus(404);
         throw error;
        }
        todo.id = await results.insertId;
        res.send(todo);
    })

})
// Deleting a Todo
app.post('/todos/delete/:id', async (req, res) => {
    if(req.params.id) {
        await connection.query(`delete from todos WHERE id = ?`, [req.params.id], async function(error) {
            if(error) throw error;
            res.send();
        })
    } else {
        return res.sendStatus(404);
    }

})

app.put('/todos', async (req, res) => {
    if(req.query.id) {
        await connection.query(`UPDATE todos SET completed = ? WHERE id = ?`, [!req.query.completed, req.query.id], async function(error) {
            if(error) {
                res.sendStatus(404);
                throw error;
            } else {
                res.send();
            }
        })
    }
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
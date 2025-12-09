const express = require('express');
const port = 9090;
const server = express();

server.use(express.urlencoded());

let tasks = [
    {
        "id": "1",
        "title": "Complete CRUD Project",
        "description": "Finish the Node.js CRUD application with EJS templating.",
        "date": "2025-12-07",
        "status": "Pending",
        "priority": "High"
    },
    {
        "id": "2",
        "title": "Study Express.js",
        "description": "Revise middleware, routing, and request handling.",
        "date": "2025-12-08",
        "status": "In Progress",
        "priority": "Medium"
    },
    {
        "id": "3",
        "title": "Design UI",
        "description": "Create a basic HTML & CSS layout for the To-Do List app.",
        "date": "2025-12-09",
        "status": "Pending",
        "priority": "Low"
    },
    {
        "id": "4",
        "title": "Test API Routes",
        "description": "Check POST, PUT, DELETE routes using Postman.",
        "date": "2025-12-10",
        "status": "Completed",
        "priority": "High"
    }
];
server.set("view engine", 'ejs');
server.get("/", (req, res) => {
    res.render("index", { tasks });
});

server.post("/add-student", (req, res) => {
    console.log("Body:", req.body)
    tasks.push(req.body);
    return res.redirect("/");
});

//Edit 
server.get("/edit-student/:id", (req, res) => {
    // console.log(req.query);
    let record = tasks.find(task => task.id == req.params.id);
    return res.render("edit-task", { tasks: record });
});


//Delet
server.get("/delet-student/:id", (req, res) => {
    // console.log(req.params);
    let id = req.params.id;
    tasks = tasks.filter(task => task.id != id)
    return res.redirect("/")
});

//update
server.post("/update-student", (req, res) => {
    const taskID = req.query.taskID;
    console.log(req.query);

    let updateData = tasks.map(task => {
        if (task.id == taskID) {
            return {
                ...task,
                ...req.body,
                id: taskID
            }
        } else {
            return task;
        }
    });
    tasks = updateData;
    return res.redirect("/");
});

server.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`);

});
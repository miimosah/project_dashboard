const express = require('express');
const app = express();
const studentRoute = express.Router();

//Student model 
let Student = require('../models/Student');

// Add Student 
studentRoute.route('/create').post((req, res, next) => {
    Student.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

//Get all Students
studentRoute.route('/allStudents').get((req, res) => {
    Student.find((error, data)=>{
        if (error){
            return next(error)
        } else {
            res.json(data)
        }
    })
});

//Add a project

studentRoute.route('/newProject').post((req, res) => {
    Student.find(
        {class: "Dev web"},
        ((err, data) => {
            data.map((student) => {
                student.projects.push(req.body)
                student.save();
                console.log(student.projects)
            })
            res.send("le projet a bien été ajouté")           
        })    
    );    
})

module.exports = studentRoute;

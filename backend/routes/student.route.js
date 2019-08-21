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

studentRoute.route('/addGrades/:username').post((req, res) =>{
    let username = req.params.username;
    
    Student.find(
        
        {class:"Dev web", username : username},
        ((err, data) => {
            if (err){
                console.error(err)
            }
            console.log(data)
            data.map((student) => {
                let myObj = {comments: req.body.comments, grade: req.body.grades}
                student.projects.push(myObj)
                student.save();
                console.log(student.projects)
            })
            res.send("les notes ont bien été ajouté")
        })

    )
})

module.exports = studentRoute;

const express = require('express');
const app = express();
const studentRoute = express.Router();

//Student model 
let Student = require('../models/Student');

// Add Student 
studentRoute.route('/create').post((req, res, next) => {
    Student.create(req.body.studentData, (error, data) => {
        console.log(req.body.studentData)
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
        
        ((err, data) => {
            data.map((student) => {
                let myObj = { projectname: req.body.studentProject.projectname, classname: req.body.studentProject.classname }
                student.projects.push(myObj)
                student.save();
               
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
                let myObj = { comments: req.body.comments, grade: req.body.grade}
                student.grades.push(myObj)
                student.save();
                console.log(student.grades)
            })
            res.send("les notes ont bien été ajouté")
        })

    )
 })

 studentRoute.route('/addGrades/:projectName/:username').post((req, res) => {
     let username = req.params.username;
     let projectName = req.params.projectName;

     Student.find({
             username: username,
             class: "Dev web",
             projects: {
                 $all: [{
                     "$elemMatch": {
                         name: projectName
                     }
                 }]
             }
         },
         ((err, data) => {
             if (err) {
                 console.error(err)
             }
             console.log(data)
             // res.send(data)
             data.map((students) => {
                 projectName = [];
                 let myProject = students.projects.filter
                 console.log(myProject)
                  let myObj = {comments: req.body.comments, grade: req.body.grades}
                 students.projectName.push(myObj)
                  students.save();
                  console.log(students.projects)
             })
             res.send("les notes ont bien été ajouté")
         })

     )
 })

 

studentRoute.route('/addAbsence/:username').post((req, res) => {
    let username = req.params.username;

    Student.find(  

        { class: "Dev web", username: username}, 
        ((err, data) => {
            if (err) {
                console.error(err)
            }
            
            data.map((student) => {
                let myDate = { date: req.body.date }
                student.absence.push(myDate)
                student.save();
               // console.log(student.absence)
            })
            res.send("les dates ont bien été ajouté")
        })

    )
})



studentRoute.route('/addRetard/:username').post((req, res) => {
    let username = req.params.username;

    Student.find(
        { class: "Dev web", username: username },
        ((err, data) => {
            if (err) {
                console.error(err)
            }

            data.map((student) => {
                let nbMinutes = { date: req.body.date, nbMinutes: req.body.nbMinutes }
                student.retard.push(nbMinutes)
                student.save();
                // console.log(student.retard)
            })
            res.send("les retards ont bien été ajouté")
        })

    )
})


module.exports = studentRoute;

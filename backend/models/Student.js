const mongoose = require('mongoose');
const Schema = mongoose.Schema;



// Define collection and schema
let Student = new Schema({
    
   
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    
    projects:[
        {
         name: String,
         grade: String,
         comments: String
        }
    ],
    
    absence: [
        { date: String }
    ],    
    retard: [
        { 
            date: String,
          nbMinutes: Number
         }
    ],         //[{"name" : "", "grade" : "", "comments" : ""}]
    status:{
        type: Boolean // Student : 0, Admin: 1
    },
    class:{
        type: String
    }

}, {
    collection: 'students'
    })



module.exports = mongoose.model('Student', Student)
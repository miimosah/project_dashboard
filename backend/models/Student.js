const mongoose = require('mongoose');
const Schema = mongoose.Schema;



// Define collection and schema
let Student = new Schema({
    
   
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    username: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    
    projects:[
        {
             projectname: String,
             classname: String
            
        
        }
        
    ],
    grades:[
        {
            comments: String,
            grade: String
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


Student.methods.genereteHash = (password) => {
    return bcrypt.hashSync(bcrypt, genSaltSync(8), null);
}

Student.methods.validPassword = (password) => {
    return bcrypt.compareSync(bcrypt, this.password);
}

module.exports = mongoose.model('Student', Student)
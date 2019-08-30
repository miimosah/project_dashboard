import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) {}
    

validForm(studentData) {

console.log(studentData)
  return this.http.post('http://localhost:4000/create', { studentData }).toPromise();
}
  addProject(studentProject){

  console.log(studentProject)

  return this.http.post('http://localhost:4000/newProject', { studentProject }).toPromise();
}
  addGrade(studentGrade) {

    console.log(studentGrade)

    return this.http.post('http://localhost:4000/addGrades/:username', { studentGrade }).toPromise();
   }
  // getStudent(studentGrade) {

  //   console.log(studentGrade)

  //   return this.http.get('http://localhost:4000/allStudents').toPromise();
  // }
}

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
addNote(studentData){
  return this.http.post('http://localhost:4000/addGrades/:username', { studentData }).toPromise();
}
}

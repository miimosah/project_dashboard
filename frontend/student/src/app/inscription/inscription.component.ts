import { Component, OnInit } from '@angular/core';

import { StudentService } from '../student.service';
import { FormGroup, FormControlName, FormControl } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})

export class InscriptionComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  student = new FormGroup({

    firstname: new FormControl(''),
    lastname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')

  });

  constructor(private StudentService: StudentService) {

  }


  validForm() {
    console.log(this.student.value);
    let studentData = this.student.value;

    this.StudentService.validForm(studentData).then(() => {

      console.log(studentData);
    })
  }

}

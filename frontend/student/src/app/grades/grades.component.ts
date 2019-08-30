import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormControl } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  student = new FormGroup({

    comments:  new FormControl(''),
    grade: new FormControl('')

  });
  constructor(private StudentService: StudentService, private modalService: NgbModal, private router: Router) { }

  addGrade() {
    console.log(this.student.value);
    let studentGrade = this.student.value;

    this.StudentService.addGrade(studentGrade).then(() => {
      this.StudentService.addGrade(studentGrade);

      console.log(studentGrade);
    })
  }


  closeResult: string;



  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}

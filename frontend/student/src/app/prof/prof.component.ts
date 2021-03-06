import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormControl } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})
export class ProfComponent implements OnInit {

 
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  student = new FormGroup({

    projectname: new FormControl(''),
    classname: new FormControl('')

  });
  constructor(private StudentService: StudentService, private modalService: NgbModal, private router: Router) {}


  addProject() {
    console.log(this.student.value);
    let studentProject = this.student.value;

    this.StudentService.addProject(studentProject).then(() => {
      this.StudentService.addProject(studentProject);

      console.log(studentProject);
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

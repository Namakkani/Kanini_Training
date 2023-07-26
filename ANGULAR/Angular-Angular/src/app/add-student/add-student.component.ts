import { Component } from '@angular/core';
import { students } from '../students.model';
import { StudentServiceService } from '../Services/student-service.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent {
 addStudentList:students=
 {
   studentID: 0,
   studentName: '',
   course: '',
   specialization: '',
   percentage: undefined,
   departmentID: 0
 }
 
 constructor(private studentservice:StudentServiceService,private router: Router,private fb:FormBuilder) {}
 ngOnInit(): void {

 }
 addStudent()
 {
  this.studentservice.addStudent(this.addStudentList)
  .subscribe(
    {
      next: (student) =>{
        this.router.navigate(['/Student']);
      }
      
    }
  );
 }
 cancelForm() {
  this.addStudentList = {
    studentID: 0,
    studentName: '',
    course: '',
    specialization: '',
    percentage: null,
    departmentID: 1
  };
}


}

import { Component, OnInit } from '@angular/core';
import { students } from '../students.model';
import { StudentServiceService } from '../Services/student-service.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent{
  students:students[]=[];
 constructor(private student :StudentServiceService) {};
 ngOnInit(): void
 {
  this.getAllStudents();
 }

 getAllStudents(){
  this.student.getAllStudent().subscribe((e:students[])=>{
    this.students=e;
    console.log(e);
   })
  }
  AddStudent(){}
 Delete(studentID:number){
  this.student.deleteStudentDetail(studentID)
  .subscribe(book=>{
    this.getAllStudents();
  })
}
}




import { Component } from '@angular/core';
import { Departments } from '../departments.mode';
import { Router } from '@angular/router';
import { DepartmentServiceService } from '../Services/department-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent {
addDepartmentList:Departments=
{
  departmentID: 0,
  departmentName: ''
}
constructor(private departmentService:DepartmentServiceService,private router: Router,fb:FormBuilder){}

  ngOnInit():void
  {

  }
  addDepartment()
  {
   this.departmentService.addDepartment(this.addDepartmentList)
   .subscribe(
     {
       next: (department) =>{
         this.router.navigate(['Department']);
         this.redirectToStudentList();
       }
       
     }
   );
  }
  cancelForm() {
    this.addDepartmentList = {
      departmentID: 0,
      departmentName: ''
    };
  }
  redirectToStudentList() {

    this.router.navigate(['/Department']);
  }

}

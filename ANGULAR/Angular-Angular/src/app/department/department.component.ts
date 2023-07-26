import { Component } from '@angular/core';
import { Departments } from '../departments.mode';
import { DepartmentServiceService } from '../Services/department-service.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent {
 departments:Departments[]=[];
 constructor(private department:DepartmentServiceService) {};
 ngOnInit():void
 {
this.getAllDepartment();
 }
 getAllDepartment(){
  this.department.getAllDepartment().subscribe((e:Departments[])=>
  {
    this.departments=e;
    console.log(e);
  })
 }
 DeleteDepartment(departmentID:number)
 {
  this.department.deleteDepartmentDetail(departmentID)
  .subscribe(book=>{
    this.getAllDepartment();
  })
 }
 
  
}

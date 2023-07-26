import { Component } from '@angular/core';
import { Departments } from '../departments.mode';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentServiceService } from '../Services/department-service.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.scss']
})
export class EditDepartmentComponent {
  id:any
  DepartmentDetails:Departments={
    departmentID: 0,
    departmentName: ''
  }
constructor(private route:ActivatedRoute,private router: Router,private departmentService:DepartmentServiceService){}
ngOnInit():void{

  this.route.params.subscribe(params => {
    this.id = params['id'];
    if (this.id) {
      this.departmentService.getDepartment(this.id).subscribe((response: any) => {
        this.DepartmentDetails = response;
      });
    }
  });
}
editDepartment():void{
  this.departmentService.updateDepartment(this.DepartmentDetails.departmentID,this.DepartmentDetails).subscribe(()=>
  {
    this.router.navigate(['/Department']);
  });
}
}

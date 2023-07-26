import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { DepartmentComponent } from './department/department.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';

const routes: Routes = [
  {
    path: '',
    component:StudentComponent

  },
  {
    path: 'Student',
    component:StudentComponent

  },
  {
    path:'Department',
    component:DepartmentComponent
  },
  {
    path:'AddStudent',
    component:AddStudentComponent
  },
  {
   path:'AddDepartment',
   component:AddDepartmentComponent
  },
  {
    path:'Student/Editstudent/:id',
    component:EditStudentComponent
  },
  {
    path:'Department/EditDepartment/:id',
    component:EditDepartmentComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

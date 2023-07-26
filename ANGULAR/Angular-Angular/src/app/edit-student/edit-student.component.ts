import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../Services/student-service.service';
import { students } from '../students.model';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {
  id:any
  studentDetails: students = {
    studentID: 0,
    studentName: '',
    course: '',
    specialization: '',
    percentage: '',
    departmentID: 0
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: StudentServiceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.service.getStudent(this.id).subscribe((response: any) => {
          this.studentDetails = response;
        });
      }
    });
  }

  updateStudentDetail(): void {
    this.service.updateStudentDetail(this.id, this.studentDetails)
      .subscribe(() => {
        this.router.navigate(['/Student']);
      });
  }
}

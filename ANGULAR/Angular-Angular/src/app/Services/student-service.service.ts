import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { students } from '../students.model';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  baseApiurl:string=environment.baseApiurl;
  constructor(private http: HttpClient) { }
  getAllStudent():any
  {
    const headers = new HttpHeaders()
    .set('content-type','application/json')
    .set('Access-Control-Allow-Origin', '*');  
   return  this.http.get<students[]>(this.baseApiurl + '/api/Student',{'headers':headers})
  }
    addStudent(addStudentList: students)
  {
    return this.http.post(this.baseApiurl + '/api/Student',addStudentList);
  }
  getStudent(id:number)
  {
  return this.http.get(`${this.baseApiurl + '/api/Student'}/${id}`)
  }
  updateStudentDetail(studentID:number,updateStudent:students)
  {
    const headers = new HttpHeaders()
    .set('content-type','application/json')
    .set('Access-Control-Allow-Origin', '*'); 
  return this.http.put<students>(this.baseApiurl + '/api/Student',updateStudent,{'headers':headers})
  }

  deleteStudentDetail(id: number): Observable<any> {
    return this.http.delete(`${this.baseApiurl + '/api/Student'}/${id}`, { responseType: 'text' });
  }
}


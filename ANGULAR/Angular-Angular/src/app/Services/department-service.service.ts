import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Departments } from '../departments.mode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class  DepartmentServiceService
{
  baseApiurl:string=environment.baseApiurl;
  constructor(private http:HttpClient) { }
  getAllDepartment():any
  {
    const headers = new HttpHeaders()
    .set('content-type','application/json')
    .set('Access-Control-Allow-Origin', '*');  
   return  this.http.get<Departments[]>(this.baseApiurl + '/api/Department',{'headers':headers})
  }
  addDepartment(addDepartmentList:Departments){
    return this.http.post(this.baseApiurl + '/api/Department',addDepartmentList)
  }
  deleteDepartmentDetail(id: number): Observable<any> {
    return this.http.delete(`${this.baseApiurl + '/api/Department?DepartmentID='}${id}`, { responseType: 'text' });
  }
  getDepartment(id:number)
  {
    return this.http.get(`${this.baseApiurl + '/api/Department'}/${id}`)
  }

  updateDepartment(departmentID: number, updateDepartment: Departments): Observable<Departments> {

    const headers = new HttpHeaders()
    .set('content-type','application/json')
    .set('Access-Control-Allow-Origin', '*'); 
    return this.http.put<Departments>(this.baseApiurl + '/api/Department',updateDepartment,{'headers':headers})
  }
}

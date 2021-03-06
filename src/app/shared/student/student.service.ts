import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from 'src/app/student';


@Injectable()
export class StudentService {

  public API = '//localhost:8080/SpringbootTest';
  

  constructor(private http: HttpClient) { 

  }

  getAll(): Observable<any> {
    return this.http.post(this.API+'/student/query',null);
  }

  get(id: string){
    return this.http.get(this.API+'/student/get/'+id);
  }

  login(student: any): Observable<any>{
    return  this.http.post(this.API+"/login/loginProcess",student);
  }

  register(student: any): Observable<any>{
    return  this.http.post(this.API+"/register/registerProcess",student);
  }

  save(student: any): Observable<any>{
    let result: Observable<Object>;
    if(student['href']){
      //result = this.http.put(student.href, student);
      result = this.http.post(this.API+"/register/registerProcess",student);
    }else{
      result = this.http.post(this.API,student);
    }
    return result;
  }

  remove(href: string){
    return this.http.delete(href);
  }

  resetPwd(student: any){
    return this.http.post(this.API+"/login/resetPwd",student);
  }

  checkAcc(sacc: string){
    return this.http.get(this.API+"/register/checkacc/"+sacc);
  }
}

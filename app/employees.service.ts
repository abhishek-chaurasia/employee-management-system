import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import {Employee} from './employee';
import { throwError,Observable } from 'rxjs';
import { tap, catchError, map} from 'rxjs/operators';
@Injectable(
)
export class EmployeesService {

  employeesUrl = 'api/employees'; 
  constructor(private http:HttpClient) { }


  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

    private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }
  /*getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl)
  }*/
   addUser (employee: Employee): Observable<Employee> { 
    employee.id=null;
    return this.http.post<Employee>(this.employeesUrl, employee, this.httpOptions).pipe(
    tap(data => console.log(data)),
    catchError(this.handleError)
  );
}
getUsers(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
}
deleteCar (id: number): Observable<Employee> {
  if(confirm('Are you sure you want to delete')){
  const url = `${this.employeesUrl}/${id}`;
  return this.http.delete<Employee>(url, this.httpOptions).pipe(
    catchError(this.handleError)
  );
}}

getUser (id: number): Observable<Employee> {
const url = `${this.employeesUrl}/${id}`;
return this.http.get<Employee>(url).pipe(
catchError(this.handleError)
);
}
editUser(employee: Employee): Observable<Employee>{
  console.log(employee.id);
  const url = `${this.employeesUrl}/${employee.id}`;
  return this.http.put<Employee>(url, employee, this.httpOptions).pipe(
    map(() => employee),
    catchError(this.handleError)
  );
}

}
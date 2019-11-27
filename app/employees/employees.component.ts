import { Component, OnInit } from '@angular/core';
import {Employee} from './employee';
import{EmployeesService} from '../employees.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Params, ParamMap,Router } from "@angular/router";
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

search:string;
private employees: Employee[];
  constructor(private _employeesService:EmployeesService,private _router:Router,private http:HttpClient){}

  deleteEmployee=function(id) {
    this._employeesService.deleteCar(id).subscribe(data => { 
          this.getUsers();
    }); 
     
  }
  getUsers(){
    this._employeesService.getUsers().subscribe(data => {
      this.employees=data;
    });
  }
/*getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this._employeesService.employeesUrl)
  }*/

 goToList():void{
      this._router.navigate(['/employees']);
  }
  ngOnInit() {
  /*  this._employeesService.getEmployees().subscribe(
      data => this.employees = data*/
      this.getUsers();
    

}
}
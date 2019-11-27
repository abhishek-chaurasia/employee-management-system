import { Component,OnInit} from '@angular/core';
import{Employee} from './employee';
import{EmployeesService} from './employees.service';
import { ActivatedRoute, Params, ParamMap,Router } from "@angular/router";
@Component({
  templateUrl: '/addEmployee.component.html'
})
export class addEmployeeComponent{
//empList:Employee[]=[];
private employees: Employee;
/*addEmployee(form)
{
  let emp:Employee;
  emp=form.value;
  this.empList.push(emp);
  console.log(form.value)
}*/
  constructor(private dataservice:EmployeesService,private _router:Router){}
addEmployee(userFormGroup) {
    this.dataservice.addUser(userFormGroup.value).subscribe(data => {
      this.employees = data;
      console.log(this.employees);
    });
  this.goToList()
  }
  goToList():void{
      this._router.navigate(['/employees']);
  }

 }

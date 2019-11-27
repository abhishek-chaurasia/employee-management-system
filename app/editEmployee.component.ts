import { Component,OnInit} from '@angular/core';
import{Employee} from './employee';
import{EmployeesService} from './employees.service';
import { ActivatedRoute, Params, ParamMap,Router } from "@angular/router";
@Component({
  templateUrl: '/editEmployee.component.html'
})
export class editEmployeeComponent implements OnInit{
empList:Employee;
id:any;
private data:Employee;
private employees: Employee;
/*addEmployee(form)
{
  let emp:Employee;
  emp=form.value;
  this.empList.push(emp);
  console.log(form.value)
}*/
  constructor(private dataservice:EmployeesService,private _router:Router,private route:ActivatedRoute){}


editEmployee(emp) {
   console.log(emp);
   emp.id=this.id;
   //this.employees.email=emp.email;
      //this.user.age = 'Updated Age';
      this.dataservice.editUser(emp).subscribe(data1 => {
        this.goToList();
      });
  
}




  goToList():void{
      this._router.navigate(['/employees']);
  }

getUsers(){
    this.dataservice.getUsers().subscribe(data => {
      this.employees=data;
    //  console.log(this.employees);
    });

  }
getUser=function(fetchId) {
    this.dataservice.getUser(fetchId).subscribe(data => {
      this.employees = data;
     this.displayData= true;
    console.log(this.employees)
    });
  }


 ngOnInit() {
   // this.id=this.route.snapshot.paramMap.get('empid');
   this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.id = +params['empid']||0;
      });
   this.getUser(this.id);
  // console.log(this.data);
     /*console.log(this.employees[0].id);
      for(let i=0;i<this.employees.length;i++)
      {
        if(parseInt(this.employees[i].id)===this.id){
          this.data=this.employees[i];
          break;
        }
      }*/
    }


 }

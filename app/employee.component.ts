import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ParamMap,Router } from "@angular/router";
import { Location } from "@angular/common";
import{EmployeesService} from './employees.service';
//import "rxjs/add/operator/map";

@Component({
    template: `<div>
    <h2>Employee Details</h2>
    <div>
            <label style="margin-left:15px">ID:  </label><span style="margin-left:50px">{{id}}</span><br>
            <label style="margin-left:15px">Name: </label><span style="margin-left:28px">{{this.employees.name}}</span><br>
              <label style="margin-left:15px">Location: </label><span style="margin-left:10px">{{this.employees.location}}</span><br>
                <label style="margin-left:15px">Email: </label><span style="margin-left:30px">{{this.employees.email}}</span><br>
                  <label style="margin-left:15px">Mobile: </label><span style="margin-left:19px">{{this.employees.mobile}}</span>
    </div>
    <br>
    <button (click)="goBack()">Back</button>
</div>
`
})
export class EmployeeComponent implements OnInit { 
    id: any;

    constructor(private route: ActivatedRoute, private location: Location,private _router:Router,private dataservice:EmployeesService){ }

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
    }

    goBack(): void {
       // this.location.back();
       this._router.navigate(['/employees']);
    }
}

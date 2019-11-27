import { Pipe, PipeTransform } from '@angular/core';
import {Employee} from './employee';
@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(employees: Employee[], search: string) {
    if(!employees ||!search){
return employees;
    }
    return employees.filter(employee =>
    employee.name.toLowerCase().charAt(0)===search.charAt(0)) ;
  }

}


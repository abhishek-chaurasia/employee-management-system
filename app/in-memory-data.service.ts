import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Employee} from './employee';
export class InMemoryDataService implements InMemoryDbService,Employee{
  createDb() {
   const employees :Employee[]= [
    {
      id: 1,
      name: 'RAM',
      location: 'Bangalore',
      email:'ram@mail.com',
      mobile:'9876512345'

    },
    {
       id: 2,
      name: 'RAJ',
      location: 'Chennai',
      email:'raj@mail.com',
      mobile:'7867534521'

    },
    {
       id: 3,
      name: 'VINAY',
      location: 'Pune',
      email:'vinay@mail.com',
      mobile:'9975287450'

    }
  ];
  return {employees};
  }
}
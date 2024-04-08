import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [
  ],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
// class Employee{
//   public _id:string;
//   public first_name:string;
//   public last_name:string;
//   public  email:string;
//   public gender:string;
//   public salary:number;
//   constructor(private http:HttpService, id:string, first_name:string, last_name:string, email:string, gender:string, salary:number){
//     this._id=id;
//     this.first_name = first_name;
//     this.last_name = last_name; 
//     this.email = email;
//     this.gender = gender;
//     this.salary=salary;
//   }
// }

export class EmployeesComponent {
  // public showTable:boolean=true
  public employeesList:any[]=[]
  public access=localStorage.getItem('token')

  constructor(private http:HttpService, private router:Router) {
    try{this.getAllEmployees();}
    catch(e){
      console.log(e)
    }
  }

  getAllEmployees():any{
    this.http.getAllEmployees().subscribe((data:any)=>{
      
      this.employeesList=data.data.getAllEmployees;
      
    })
  }

  logout(){
    localStorage.removeItem("token");
    window.location.href="/"
  }

  public route(action:string, id:string=''){
    this.router.navigate(['/employee-action', action, id])
  }

  
}
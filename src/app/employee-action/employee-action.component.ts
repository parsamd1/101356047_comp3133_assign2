import { Component, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-employee-action',
  standalone: true,
  imports: [FormsModule, UpperCasePipe],
  templateUrl: './employee-action.component.html',
  styleUrl: './employee-action.component.css'
})


export class EmployeeActionComponent {
  @Input() empId:string='66102b3cc8b6f4cf3bd8de19';
  @Input() action:string='update';
  public employee:any=null;

  public first_name:string=''
  last_name:string=''
  email:string=''
  gender:string=''
  salary:number=0
  constructor(private httpClient:HttpService) {
    try{
      this.getTheEmployee(this.empId);
    }
    catch(e){
      console.log(e)
      alert(e)
    }
  }
  getTheEmployee(id:string):any{
    this.httpClient.getEmployeeById(id).subscribe((data:any) =>{
      console.log(data)
      this.employee= data.data.searchEmployeeById
      if(this.employee){
      this.first_name=this.employee.first_name
      this.last_name = this.employee.last_name
      this.email = this.employee.email
      this.gender = this.employee.gender
      this.salary = parseFloat(this.employee.salary)
      }
    })
  }

  addEmployee(first_name:string=this.first_name, last_name:string=this.last_name, email:string=this.email, gender:string=this.gender, salary:number=this.salary){
    try{
      this.httpClient.addEmployee(first_name,last_name,gender,email,salary).subscribe((data:any)=>{
        if(data.data.addEmployee1){
          alert('Employee added successfully');
          console.log(data.data.addEmployee1)
        }
        else{
          throw new Error('INTERNAL ERROR')
        }
      })
    } 
    catch(e){
      alert('Employee was not added -> '+e)
      console.log(e)
    }
  }

}

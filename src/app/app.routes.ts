import { Routes } from '@angular/router';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeActionComponent } from './employee-action/employee-action.component';

export const routes: Routes = [
    {path: '', component:LoginRegisterComponent},
    {path:'employeelist', component:EmployeesComponent},
    {path:'employee-action', component:EmployeeActionComponent}
];

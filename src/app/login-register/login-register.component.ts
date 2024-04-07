import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.css'
})
export class LoginRegisterComponent {
  public showLogin:boolean=false;
  username:string=''
  password:string=''
  email:string=''
  statusText:string=''

  constructor(private httpClient:HttpService){}

  setShowLogin(){
    this.showLogin=!this.showLogin;
  }

  public login(){
    try{
      this.httpClient.login(this.username,this.password).subscribe((data:any)=>{
        if(!data.data.login){
          this.statusText="Login Failed"
          throw new Error("Login failed")
        }
        localStorage.setItem('token', data.data.login.username);
        alert("Login successful. Transferring you to employeelist page...")
        window.location.href="/employeelist"
      })
    }
    catch(e:any){
      // alert("Login failed")
      
      console.log(this.statusText)
    }
  }
  public signup(){
    try{
      this.httpClient.signup(this.username, this.password, this.email).subscribe((data:any)=>{
        if(!data.data.signup){
          this.statusText="Signup Failed"
          throw new Error("Signup failed")
        }
        alert("User created successfully.")
        this.showLogin=true
      })
    }
    catch(e){
      console.log(e)
    }
  }
  
}

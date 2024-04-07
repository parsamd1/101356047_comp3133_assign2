import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient) { }

  public getAllEmployees():any{
    const query=`{
        getAllEmployees {
          _id
          gender
          last_name
          salary
          first_name
          email
        }
    }`

    const url="http://localhost:4000/graphql"

    return this.httpClient.post(url, JSON.stringify({query:query}), {headers:{'Content-Type':'application/json'}})
  }
  public getEmployeeById(id:string){
    const query=`{
      searchEmployeeById(id:"${id}"){
        _id
        first_name
        last_name
        email
        gender
        salary
    }
  }`
    const url="http://localhost:4000/graphql"
    return this.httpClient.post(url, JSON.stringify( {"query":query} ), {headers:{'Content-Type':"application/json"}});
  }

  public addEmployee(first_name:string, last_name:string, gender:string, email:string, salary:number):any{
    const mutation=`mutation {
      addEmployee1(first_name:"${first_name}", last_name:"${last_name}", email:"${email}", gender:"${gender}", salary:${salary}){
        _id
        first_name
        last_name
        email
        gender
        salary
      }
    }`
    const url="http://localhost:4000/graphql"
    return this.httpClient.post(url, JSON.stringify( {"query":mutation} ), {headers:{'Content-Type':"application/json"}});
  }

  public updateEmployeeById(id:string, first_name:string, last_name:string, email:string, gender:string, salary:number){
    const mutation=`mutation{
      updateEmployeeById(id:"${id}", first_name:"${first_name}", last_name:"${last_name}", email:"${email}", gender:"${gender}", salary:${salary}){
        _id
        first_name
        last_name
        email
        gender
        salary
      }
    }`
    const url="http://localhost:4000/graphql"
    return this.httpClient.post(url, JSON.stringify({query:mutation}), {headers:{"Content-Type":"application/json"}})
  }

  public deleteEmployeeById(id:string){
    const mutation=`mutation {
      deleteEmployeeById(id:"${id}"){
        _id
        first_name
        last_name
        email
        gender
        salary
      }
    }`
    const url="http://localhost:4000/graphql"
    return this.httpClient.post(url, {query:mutation},  {headers:{"Content-Type":"application/json"}})
  }

  public login(username:string, password:string){
    const query=`query{
      login(username:"${username}", password:"${password}"){
        username
        email
        password
      }
    }`
    const url="http://localhost:4000/graphql"
    return this.httpClient.post(url, JSON.stringify({"query":query}), {headers:{"Content-Type":"application/json"}})
  }

  public signup(username:string, password:string, email:string){
    const mutation=`mutation{
      signup(email:"${email}", username:"${username}", password:"${password}"){
        username
        email
        password
      }
    }`
    const url="http://localhost:4000/graphql"
    return this.httpClient.post(url, JSON.stringify({query:mutation}), {headers:{"Content-Type":"application/json"}})
  }
}
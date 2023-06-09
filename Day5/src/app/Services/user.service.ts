import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly myClient:HttpClient) { }
  private readonly Base_URL = "http://localhost:3000/users";
  //Methods [All Requests]
  GetAllUsers(){
    //method[Get-Delete-Put-Patch]
    return this.myClient.get(this.Base_URL);
  }
  GetUserByID(id:any){
    return this.myClient.get(this.Base_URL+"/"+id);
  }
  AddNewUser(newUser:any){
    return this.myClient.post(this.Base_URL, newUser);
  }
  UpdateUser(id:any,updateduser:any){
    return this.myClient.put(this.Base_URL + "/" + id, updateduser);
  }
  deleteUser(id: any) {
    return this.myClient.delete(this.Base_URL + "/" + id);
  }
}

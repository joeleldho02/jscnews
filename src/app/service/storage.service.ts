import { Injectable } from '@angular/core';
import { AdminModel } from '../models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  getToken():string | null{
    return localStorage.getItem("token");
  }

  getUser():AdminModel | null{
    const user = localStorage.getItem('user');  
    if( typeof user === 'string'){      
      const userParsed = JSON.parse(user) as AdminModel;
      return userParsed;
    }else{
      return null;
    }
  }

  isAdminLoggedIn(): boolean{
    if(this.getToken() === null){
      return false;
    }
    const user = this.getUser();
    if(user){
      return user.isAdmin as boolean;
    }
    return false;
  }

  saveToken(token:string):void{
    localStorage.removeItem("token");
    localStorage.setItem("token", token);
  }

  saveUser(user:AdminModel){
    localStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify(user));
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
}

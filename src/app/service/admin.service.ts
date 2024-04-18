import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../constData';
import { AdminModel } from '../models/admin.model';
import { LoginModel } from '../models/login.model';
import { CustomToken } from '../models/token.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  
  resetPassword(data:AdminModel){
    return this.http.put(`${BASE_URL}/api/admin/resetPassword`, data);
  }
  
  login(loginData:LoginModel):Observable<CustomToken> {
    return this.http.post<CustomToken>(`${BASE_URL}/api/admin/login`, loginData)
  }

  logout(){
    return this.http.get(`${BASE_URL}/api/admin/logout`);
  }
}

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router){}

  isLoading:boolean = false;  
  sub!:Subscription;
  isLoggedIn = false;
  
  loginForm = new FormGroup({
    email : new FormControl('', [ Validators.required, Validators.pattern(/[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}/)]),
    password : new FormControl('', [ Validators.required])
  })

  submit(){
    console.log(this.loginForm.value);
    
    this.isLoading = true;
    setTimeout(()=>{
      this.router. navigateByUrl('/admin');
    },1000)
    // if(this.loginForm.valid){
    //     // this.userService.loginAdmin(this.loginForm.value as LoginModel).subscribe((data)=>{
    //     //   if(data?.user != null){
    //     //     this.storage.saveToken(data.accessToken);
    //     //     this.storage.saveUser(data.user);     
    //     //     this.route.navigate(['/admin']);
    //     //   } else {
    //     //     this.isLoading = false;   
    //     //     alert('Login Failed! Invalid credentials.');
    //     //     console.log('Login Failed! Invalid credentials.');
    //     //   }
    //     // }); 
    // } else{
    //   this.isLoading = false;   
    //   console.log('message: Please enter login credentials to continue!, resulttype fail');
    // }
  }

  logout(){
    this.router. navigateByUrl('/admin/login');
  }
}

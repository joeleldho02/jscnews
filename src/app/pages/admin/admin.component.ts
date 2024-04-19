import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  isLoggedIn = false;
  isLoading = false;
  isEdit = false;
  imageSelected = false;
  prevImg = 'assets/images/jsc-logo-gray-trans.png'
  
  file! : File;
  constructor(private router:Router){}

  showNav = false;
  categories = [
    'main',
    'featured',
    'press release',
    'other'
  ]

  articleForm = new FormGroup({
    category : new FormControl('', [ Validators.required]),
    date : new FormControl(Date.now(), [ Validators.required]),
    title : new FormControl('', [ Validators.required, Validators.minLength(3)]),
    description : new FormControl(''),
    body : new FormControl('', [ Validators.required, Validators.minLength(10)]),
    isPublished : new FormControl(true, [ Validators.required]),
    image : new FormControl()
  }); 
  
  openMenu(){
    this.showNav = !this.showNav;
  }
  logout(){
    this.router.navigateByUrl('/admin/login');
  }
  submit(){
    console.log(this.articleForm.value);
    this.router.navigateByUrl('/admin');    
  }
  ngOnInit(): void {
    // if(this.isEdit)
    //   // this.articleForm.addControl('id',FormControl(''));
    this.articleForm.patchValue({
      date: Date.now()
    });
  }
  onChange(event:any){    
    if (event.target.files && event.target.files[0]) {      
      this.file = event.target.files[0];
      this.articleForm.patchValue({
        image:this.file
      })      ;
      const reader = new FileReader();
      reader.addEventListener('load', (event) => {
        this.prevImg = reader.result as string;
      })
      reader.readAsDataURL(this.file);
      this.imageSelected = true;      
    }
  }

}

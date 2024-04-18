import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  currentDate = new Date(Date.now());
  sideBarRight = -500;

  openMenu(){
    if(this.sideBarRight === 0)
      this.sideBarRight = -500;
    else
      this.sideBarRight = 0;  
  }
  closeMenu(){
    this.sideBarRight = -500;
  }
}

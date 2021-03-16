import { UserLoggedinService } from './../services/user-loggedin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, private service: UserLoggedinService){

  }

  ngOnInit(): void {
    this.service.userLoggedInSub().subscribe(res => {
      if (!res){
        this.router.navigate(['/session/login']);
      }
    },
    err => {

    });
  }


  logout(){
    localStorage.clear();
    this.service.userLogout();
  }

}

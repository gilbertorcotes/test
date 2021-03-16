import { UserLoggedinService } from './services/user-loggedin.service';
import { AuthService } from './services/auth.service';
import { Component, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  showmenu = false;

  constructor(private auth: AuthService, private service: UserLoggedinService){
    this.showmenu = !!this.service.getUserLoggedIn();
    console.log(this.showmenu);
    this.service.userLoggedInSub().subscribe(res =>
    {
      this.showmenu = !!res;
    },
      err => {

    });
  }
}

import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  showmenu = false;

  constructor(private auth: AuthService){
    const token = this.auth.getToken();
    const ident = this.auth.getIdentity();
    this.showmenu = !!token && !!ident;
  }
}

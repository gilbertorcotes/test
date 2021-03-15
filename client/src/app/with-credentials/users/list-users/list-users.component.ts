import { Component, OnInit } from '@angular/core';
import { GetUsersService } from '../get-users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  public data: Array<any>;
  public record: string;
  public page: 1;
  public p: number = 1;

  constructor(
    private _UserGidService: GetUsersService) {
      this.data = new Array<any>();
      this.getUsersGid();
    }

  ngOnInit(): void {
  }

  getUsersGid(){
    this._UserGidService.getData().subscribe((data) => {
      console.log(data);
      this.data = data.users;
      this.record = data.users?.length;
    });
  }

}

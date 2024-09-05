import { Component } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'myApp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public httpService : HttpService){

  }
  open(){
    this.httpService.getRequest().subscribe(_data=>  {
      console.log(_data.name);
  });
 
  }
}

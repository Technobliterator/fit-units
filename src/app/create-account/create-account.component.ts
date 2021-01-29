import { Component, OnInit } from '@angular/core';
import  { FitUnitsServiceService } from '../fit-units-service.service'

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
 data : any;

  constructor(public service: FitUnitsServiceService) { 
    this.data = {
      "name": "",
      "email": "",
      "password": ""
    }
  }

  ngOnInit(): void {
  }


  //create user function
  createUser() {
    this.service.createUser(this.data).subscribe((result: any) => {
      console.log("userdata",this.data);
        alert("User created successfully"); 
    }, error => {
      console.error(error);
    })

  }
}

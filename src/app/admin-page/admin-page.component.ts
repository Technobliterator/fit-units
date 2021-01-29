import { Component, OnInit } from '@angular/core';
import { FitUnitsServiceService } from '../fit-units-service.service'

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
data = [];
userData = [];

  constructor(private appService: FitUnitsServiceService) { }

  ngOnInit(): void {
    this.appService.getUsers().subscribe((results: any) => {
      this.data = results;
      this.userData = this.data;
      console.log("USERDATAAAA",this.userData);
      
    });

  }


}

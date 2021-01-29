import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FitUnitsServiceService {
    url = "https://al6dfe8xc5.execute-api.us-east-2.amazonaws.com/dev";
  
  constructor(private http: HttpClient) { }

  //get all the product catalog
getProductCatalog(){
  let url =  `${this.url}/getproducts`;
  return this.http.get(url);
}

//create user post request
createUser(data) {
 let url =  `${this.url}/post`;
  return this.http.post(url, data);
}

//get user data
getUsers() {
  let url =  `${this.url}/getUserData`;
  return this.http.get(url);
 }

}
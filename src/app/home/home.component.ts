import { Component, OnInit } from '@angular/core';
import { FitUnitsServiceService } from '../fit-units-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FitUnitsServiceService]
})
export class HomeComponent implements OnInit {
productdata = [];
data = [];
filterarray = [];
categorydata: any;
imagePathURL: any;
activeState = 'All';
cartCount : any;
cartdata =  [];
listData = [
  {"listname" : "All",
  "key": "All"},
  {"listname" : "Cardio",
  "key": "cardio"},
  {"listname" : "Strength",
  "key": "strength"},
  {"listname" : "Accessories",
  "key": "Accessories"}
]
 






  constructor(private appService: FitUnitsServiceService) { }

  ngOnInit(): void {
    this.cartCount = 0;
    //this.data = this.appService.getProductCatalog();
    //this.productdata = this.data;
    
    //this.productdata = this.appService.getProductCatalog()
      //this.productdata = results;
      this.imagePathURL = "https://fitunitsawsbucket.s3.us-east-2.amazonaws.com/"
     
      this.appService.getProductCatalog().subscribe((results: any) => {
        this.data = results;
        console.log("DATA",this.data);
        this.productdata = this.data;
        
      });

     
      
  }
  filterData(category){
    if(category === 'All'){
      this.productdata = this.data;
      this.activeState = category;
    }else{
      console.log("category",category);
      this.filterarray = this.data.filter(item => item.category === category);
      this.productdata = this.filterarray;
          console.log("CATEGORY...",this.filterarray);
    }
    this.activeState = category;
  }
  filterSubData(category,subcategory){
    this.filterarray = this.data.filter(item => item.subcategory === subcategory);
    this.productdata = this.filterarray;
        console.log("subcategory...",this.filterarray);
  }
  select(state) {
    this.activeState = state;
};
updateCount(item){
  if(item.available <= 0){
    alert("The product is out of stock");
  }else{
    //console.log("COUNT", item);
    item.available = item.available -1;
    this.cartCount = this.cartCount+1;
    console.log("CARTTTTTCOUNT", this.cartCount);
   this.cartCount =  this.cartdata.push(item);
    this.viewCart(this.cartdata,this.cartCount);
  }

  
  
}
viewCart(item,count){
 console.log("CART ITEMS",item);
 console.log("CARTTTTTCOUNT", this.cartCount);
}



}

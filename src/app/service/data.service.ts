import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resourceUsage } from 'process';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(
    private http:HttpClient
  ) { 

  }

  getAllNamesListing(){
    
    //return this.http.get("/assets/data/data.json");
    return this.http.get("/assets/data/names.json");

  }

  getAllDataListing(){
    
    return this.http.get("/assets/data/data.json");

  }

  getNestedListingdData(){

    return this.http.get("/assets/data/nested.data.json");
    
  }

}

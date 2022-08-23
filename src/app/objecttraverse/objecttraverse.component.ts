import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-objecttraverse',
  templateUrl: './objecttraverse.component.html',
  styleUrls: ['./objecttraverse.component.css']
})
export class ObjecttraverseComponent implements OnInit {

  jsonData: any;

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit(): void {

    this.dataService.getNestedListingdData().subscribe(data => {

      this.jsonData = data;

      console.log(this.jsonData);

    });

  }

}

import { Component, OnInit } from '@angular/core';
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

    this.dataService.getAllDataListing().subscribe(data => {

      this.jsonData = data;

      console.log(this.jsonData);

    });

  }

}

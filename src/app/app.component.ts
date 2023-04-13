import {Component, OnInit} from '@angular/core';

import {DataService} from "./services/data.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'angular-test';
  dataSource: any;
  data: any;
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getData().subscribe((res) => {
      this.data = res
      this.dataSource = this.data.results
    })

  constructor() {


  }
  ngOnInit() {

  }
}

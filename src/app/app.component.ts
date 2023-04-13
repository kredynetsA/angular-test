import {Component, OnInit} from '@angular/core';

import {DataService} from "./services/data.service";
import {LocalStorageService} from "./services/local-storage.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-test';
  dataSource: any;
  data: any;
  constructor(private dataService: DataService, private storageService: LocalStorageService) {
  }

  ngOnInit() {
    // const filters: string = this.storageService.getFilters()
    this.dataService.getData().subscribe((res) => {
      this.data = res
      this.dataSource = this.data.results
    })
  }
}

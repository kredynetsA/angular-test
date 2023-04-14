import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {LocalStorageService} from "../../services/local-storage.service";

@Component({
  selector: 'app-grid-page',
  templateUrl: './grid-page.component.html',
  styleUrls: ['./grid-page.component.scss']
})
export class GridPageComponent implements OnInit, OnDestroy {
  dataSource: any;
  subscriptions: any[] = [];
  constructor(private dataService: DataService, private storageService: LocalStorageService) { }

  ngOnInit(): void {
    const filters = this.storageService.getFilters();
    const subscription = this.dataService.getData(filters.toString()).subscribe((res: any) => {
      const data: any = res
      this.dataSource = data.results
    })
    this.subscriptions.push(subscription)
  }
  onChanged(event: any) {
    const subscription = this.dataService.getData(event).subscribe((res: any) => {
      const data: any = res
      this.dataSource = data.results
    })
    this.subscriptions.push(subscription)
  }
  ngOnDestroy() {
    this.subscriptions.forEach((s: any) => {
      s.unsubscribe();
    })
  }
}

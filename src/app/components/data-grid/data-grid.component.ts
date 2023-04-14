import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {LocalStorageService} from "../../services/local-storage.service";

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit, OnDestroy {
  @Input() dataSource:any;
  isCity: boolean = true;
  isStreet: boolean = true;
  subscriptions: any[] = [];
  constructor(private storageService: LocalStorageService) { }

  ngOnInit(): void {
    const subscription1 = this.storageService.isCity.subscribe((res) => {
      this.isCity = res
    })
    this.subscriptions.push(subscription1)
    const subscription2 = this.storageService.isStreet.subscribe((res) => {
      this.isStreet = res
    })
    this.subscriptions.push(subscription2)
  }
  ngOnDestroy() {
    this.subscriptions.forEach((s:any) => {
      s.unsubscribe();
    })
  }
}

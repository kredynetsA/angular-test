import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LocalStorageService} from "../../services/local-storage.service";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.scss']
})
export class CheckboxFilterComponent implements OnInit {
  @Output() onChanged = new EventEmitter<any>();
  isChecked: boolean = true;
  checkboxes: any;
  constructor(private storageService: LocalStorageService) {}
  ngOnInit(): void {
    this.checkboxes = this.storageService.getStorage()
  }
  onCheckboxChange(event: any, checkbox: any){
    checkbox.isChecked = event.target.checked
    this.storageService.updateStorage(checkbox)
    const filters: string = this.storageService.getFilters()
    this.onChanged.emit(filters)
  }

}

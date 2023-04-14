import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  isCity = new BehaviorSubject<boolean>(true);
  isStreet = new BehaviorSubject<boolean>(true);
  checkboxes: any = [
    {
      title: 'gender',
      isChecked: false
    },
    {
      title: 'city',
      isChecked: false
    },
    {
      title: 'street',
      isChecked: false
    },
    {
      title: 'email',
      isChecked: false
    },
    {
      title: 'phone',
      isChecked: false
    },
  ]

  constructor() {
    const storage = this.getStorage();
    if(!storage) {
      this.setToStorage(this.checkboxes)
    }
  }
  setToStorage(storage: any) {
    localStorage.setItem('filters', JSON.stringify(storage))
  }
  getStorage() {
    const data: any = localStorage.getItem('filters')
    return JSON.parse(data)
  }
  updateStorage(storageItem: any) {
    const storage = this.getStorage()
    storage.forEach((c:any) => {
      if (c.title == storageItem.title) {
        c.isChecked = storageItem.isChecked
      }
    })
    this.setToStorage(storage)
  }

  getFilters() {
    const filters:any = [];
    const storage = this.getStorage()
    storage.forEach((c:any) => {
      if (c.isChecked !== false) {
        filters.push(c.title)
      }
    })
    if (!filters.includes('city')) {
      this.isCity.next(false)
    } else {
      this.isCity.next(true)
    }
    if (!filters.includes('street')) {
      this.isStreet.next(false)
    } else {
      this.isStreet.next(true)
    }
    return filters
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  // checkboxes: any = ['gender', 'city', 'street', 'email', 'phone']
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
  data: any;

  storage: any;
  constructor() {
    this.storage = this.getStorage();
    if(!this.storage) {
      this.setToStorage(this.checkboxes)
    }

  }
  setToStorage(storage: any) {
    localStorage.setItem('filters', JSON.stringify(storage))
  }
  getStorage() {
    this.data = localStorage.getItem('filters')
    return JSON.parse(this.data)
  }
  updateStorage(storageItem: any) {
    this.storage = this.getStorage()
    this.storage.forEach((c:any) => {
      if (c.title == storageItem.title) {
        c.isChecked = storageItem.isChecked
      }
    })
    this.setToStorage(this.storage)
  }

  getFilters() {
    const filters:any = [];
    const storage = this.getStorage()
    storage.forEach((c:any) => {
      if (c.isChecked !== false) {
        filters.push(c.title)
      }
    })
    return filters.toString()
  }

}

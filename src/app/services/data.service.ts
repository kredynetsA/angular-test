import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
seed: string = "ce937eb352f5d2fd";
results: number = 100;
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(`https://randomuser.me/api/?results=${this.results}&seed=${this.seed}`)
  }

  getFilteredData(filters: string) {
    return this.http.get(`https://randomuser.me/api/?results=${this.results}?inc=${filters}&seed=${this.seed}`)
  }
}

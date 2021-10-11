import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private Http: HttpClient) { }
  //Call datafrom api
  getProducts() {
    return this.Http.get<any>('https://fakestoreapi.com/products/').pipe(map((res) => {
      return res;
    }));
  }
}

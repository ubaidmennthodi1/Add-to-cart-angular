import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productList: any;
  constructor(private api: ApiServiceService) { }

  ngOnInit(): void {
    //Call api
    this.api.getProducts().subscribe(res => {
      this.productList = res;
    })
  }

}

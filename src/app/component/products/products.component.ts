import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productList: any;
  constructor(private api: ApiServiceService, private cartService: CartService) { }

  ngOnInit(): void {
    //Call api
    this.api.getProducts().subscribe((res) => {
      this.productList = res;
      //assin  quantity and total to the object that not in the api data to add cart list
      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });

    });
  }
  addToCart(item: any) {
    this.cartService.addToCart(item);
  }
}

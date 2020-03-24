import { Component, OnInit } from '@angular/core';
import { ProductvkorzineService } from '../productvkorzine.service';
import { KorzinaComponent } from '../korzina/korzina.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
 
})
export class ProductsComponent implements OnInit {
  
  constructor(public productVKorzine: ProductvkorzineService) { }

  ProductName: '';
  ProductPrice: 0;
  ProductVal: 1;


  ngOnInit() {
  }

  Products = [
    {name: "Картошка", price: 20, val: 10},
    {name: "Абрикос", price: 30, val: 30},
    {name: "Ананас", price: 50, val: 200},
    {name: "Виски", price: 300, val: 1}
    ];

    

  AddProduct() {
    this.Products.push ({name: this.ProductName, price: this.ProductPrice, val: this.ProductVal});
    this.ProductName = '';
    }

  AddKorzina(name, price, val) {
    this.productVKorzine.Products.push ({name: name, price: price, val:  +1});
    let product = this.Products.find(product => product.name === name);
    product.val = product.val - 1;
    
  }

  Delete() {
    this.Products.splice (0,1);
  }
      
}

  

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
  ProductAmount: 1;


  ngOnInit() {
  }

  Products = [
    {name: "Картошка", price: 20, amount: 10},
    {name: "Абрикос", price: 30, amount: 30},
    {name: "Ананас", price: 50, amount: 200},
    {name: "Виски", price: 300, amount: 1}
    ];

    

  AddProduct() {
    this.Products.push ({name: this.ProductName, price: this.ProductPrice, amount: this.ProductAmount});
    this.ProductName = '';
    }

  AddKorzina(name, price) {
    let product = this.Products.find(product => product.name === name);
    product.amount = product.amount - 1;

    let productInBusket = this.productVKorzine.Products.find(x => x.name === name);
    if(productInBusket === undefined){
      this.productVKorzine.Products.push ({name: name, price: price, amount: 1});
    }
    else{
      productInBusket.amount = productInBusket.amount + 1;
    }
   
    
  }

  Delete() {
    this.Products.splice (0,1);
  }
      
}

  

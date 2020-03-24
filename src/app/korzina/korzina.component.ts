import { Component, OnInit } from '@angular/core';
import { ProductvkorzineService } from '../productvkorzine.service';
@Component({
  selector: 'app-korzina',
  templateUrl: './korzina.component.html',
  styleUrls: ['./korzina.component.css'],
  
})
export class KorzinaComponent implements OnInit {

  Products = this.productVKorzine.Products;

  

  constructor(public productVKorzine: ProductvkorzineService) { }

  ngOnInit() {
  }

  Delete() {
    this.Products.splice(0,1)
  }
}

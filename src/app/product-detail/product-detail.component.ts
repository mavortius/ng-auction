import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'nga-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute,
              private productService: ProductService) {
  }

  ngOnInit() {
    const id: number = parseInt(this.route.snapshot.params.id, 10);
    this.product = this.productService.getProductById(id);
  }

}

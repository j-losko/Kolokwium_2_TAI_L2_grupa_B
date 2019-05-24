import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shop-item-jl',
  templateUrl: './shop-item-jl.component.html',
  styleUrls: ['./shop-item-jl.component.css']
})
export class ShopItemJLComponent implements OnInit {
  @Input() id: number;
  @Input() price: number;
  @Input() text: string;
  @Input() title: string;
  @Input() image: string;

  constructor() { }

  ngOnInit() {
  }

}

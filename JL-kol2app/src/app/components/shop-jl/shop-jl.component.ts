import { Component, OnInit } from '@angular/core';
import { JlDataService } from '../../services/jl-data.service';

@Component({
  selector: 'app-shop-jl',
  templateUrl: './shop-jl.component.html',
  styleUrls: ['./shop-jl.component.css']
})
export class ShopJLComponent implements OnInit {
  public items$: any;

  constructor(private service: JlDataService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }

}

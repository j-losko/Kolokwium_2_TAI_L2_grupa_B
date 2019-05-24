import {Component, Input, OnInit} from '@angular/core';
import {JlDataService} from '../../services/jl-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shop-details-jl',
  templateUrl: './shop-details-jl.component.html',
  styleUrls: ['./shop-details-jl.component.css']
})
export class ShopDetailsJLComponent implements OnInit {
  public id: number;
  public price: number;
  public text: string;
  public title: string;
  public image: string;

  constructor(private service: JlDataService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id: string;
    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
      });
    if (id) {
      this.service.getById(id).subscribe(res => {
        this.image = res['image'];
        this.text = res['text'];
        this.price = res['price'];
        this.title = res['title'];
      });
    } else {
      this.id = 1;
    }
  }
}

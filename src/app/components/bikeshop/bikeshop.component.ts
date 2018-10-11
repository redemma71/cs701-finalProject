import { Component, OnInit } from '@angular/core';
import { BikeShop } from '../../models/bike-shop';
import { BikeshopAddressService } from '../../services/bikeshop-address.service';

@Component({
  selector: 'app-bikeshop',
  templateUrl: './bikeshop.component.html',
  styleUrls: ['./bikeshop.component.css']
})
export class BikeshopComponent implements OnInit {

  shops: Array<BikeShop>;

  constructor(private service: BikeshopAddressService ) { }

  ngOnInit() {
    this.service.getShops()
        .subscribe( result => {
          let that = this;
          that.shops = result;
        });
  }

}

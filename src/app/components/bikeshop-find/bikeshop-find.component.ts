import { Component, OnInit } from '@angular/core';
import { BikeshopAddressService } from '../../services/bikeshop-address.service';
import { BikeShop } from '../../models/bike-shop';

@Component({
  selector: 'app-bikeshop-find',
  templateUrl: './bikeshop-find.component.html',
  styleUrls: ['./bikeshop-find.component.css']
})

export class BikeshopFindComponent implements OnInit {

  shops: Array<BikeShop>;
  currentShop: BikeShop = new BikeShop();

  find(): void {
    console.log('finding your bike shop');
    document.getElementById('searchTable').classList.remove('invisible');
    document.getElementById('searchTable').classList.add('visible');
  }

  myFilter(shop: BikeShop) {
    return shop.name === 'Twenty20 Cycling Company';
  }

  myCallback(shops: Array<BikeShop>): BikeShop {
    console.log('\'shops\' object: (asynchronous)' + shops);
    let shopFilter = this.shops.filter(this.myFilter);
    return shopFilter[0];
  }

  constructor(private service: BikeshopAddressService) { }

  ngOnInit() {
    this.service.getShops()
    .subscribe( response => {
      this.shops = response;
      this.currentShop = this.myCallback(this.shops);
    });
    console.log('\'shops\' object (synchronous): ' + this.shops);
  }

}

import { Component, OnInit } from '@angular/core';
import { AsTheCrowFliesService } from '../../services/as-the-crow-flies.service';
import { BikeshopAddressService } from '../../services/bikeshop-address.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BikeShop } from '../../models/bike-shop';

@Component({
  selector: 'app-bikeshop-directions',
  templateUrl: './bikeshop-directions.component.html',
  styleUrls: ['./bikeshop-directions.component.css']
})
export class BikeshopDirectionsComponent implements OnInit {

  public shops = [];
  private catonsvilleCoords = {'lat': 39.2713168, 'lng': -76.7330446};
  private mtWashingtonCoords = {'lat': 39.2975378, 'lng': -76.6156727};
  public origin: any = this.mtWashingtonCoords;
  public destination: any = this.catonsvilleCoords;
  public myLat = this.mtWashingtonCoords.lat;
  public myLong = this.mtWashingtonCoords.lng;
  public myDestination = window.sessionStorage.getItem('my_destination_address');
  public sub: any;

  // for testing
  // public origin = this.catonsvilleCoords;
  // public destination = this.mtWashingtonCoords;

  loadData(): void {
    if ( localStorage.getItem('bike_shops') === null ) {
      this._addressService.getShops()
          .subscribe( (response) => {
              this.shops = response;
          });
    } else {
      this.shops = this.getFromLocalStorage();
    }

    if ( sessionStorage.getItem('my_origin') === null) {
      this.origin = this.mtWashingtonCoords;
    } else {
      this.origin = JSON.parse(this._crowService.getItemFromSessionStorage('my_origin'));
    }

    if ( sessionStorage.getItem('my_destination') === null) {
      this.destination = this.catonsvilleCoords;
    } else {
      this.destination = JSON.parse(this._crowService.getItemFromSessionStorage('my_destination'));
    }

  }

  getFromLocalStorage(): Array<BikeShop> {
    return JSON.parse(window.localStorage.getItem('bike_shops'));
  }

  addToLocalStorage() {
    window.localStorage.setItem('bike_shops', JSON.stringify(this.shops));
  }

  constructor(
      private _crowService: AsTheCrowFliesService,
      private _addressService: BikeshopAddressService,
      private _activatedRouteService: ActivatedRoute,
      private _router: Router
  ) {
    this.myLat = this.origin.lat;
    this.myLong = this.origin.lng;
  }

  ngOnInit() {
    this.loadData();
  }

}

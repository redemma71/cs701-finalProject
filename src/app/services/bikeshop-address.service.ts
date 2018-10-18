import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BikeShop } from '../models/bike-shop';

@Injectable({
  providedIn: 'root'
})
export class BikeshopAddressService {

  shops: Array<BikeShop> = [];

  myShop: BikeShop = {
    name: 'Baynesville Bicycle Services',
    address: {
       street: '1703 E. Joppa Road #8',
       city: 'Baltimore',
       state: 'MD',
       zip: 21234
    },
    phone: 4106684987,
    hours: {
       monday: 'Closed',
       tuesday: '9:30am-6pm',
       wednesday: '9:30am-6pm',
       thursday: '9:30am-6pm',
       friday: '9:30am-6pm',
       saturday: '9:30am-4pm',
       sunday: 'Closed'
    }
  };

  bikeShops: Array<BikeShop> = [];

  constructor(private http: HttpClient) { }

  getShops(): Observable<BikeShop[]> {
    return this.http
      .get<BikeShop[]>('assets/bikeShops.json');
  }

  setMyShop(shop: BikeShop): void {
    this.myShop = shop;
  }

  getMyShop(): BikeShop {
    return this.myShop;
  }

/*
  *************************************************************************
  *** local storage functions
  *************************************************************************
*/

loadShops(): Observable<BikeShop[]> {
  return this.http
    .get<BikeShop[]>('assets/bikeShops.json');
}


getFromLocalStorage(): Array<BikeShop> {
  return JSON.parse(window.localStorage.getItem('bike_shops'));
}


loadData(): void {
  if ( localStorage.getItem('bike_shops') === null ) {
    // subscribe to promise & then load the json data to local storage
    this.loadShops()
    .subscribe( response => {
      this.shops = response;
      this.addToLocalStorage();
    });
  } else {
      this.shops = this.getFromLocalStorage();
  }
}

addToLocalStorage() {
  window.localStorage.setItem('bike_shops', JSON.stringify(this.shops));
}

}




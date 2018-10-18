import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BikeShop } from '../models/bike-shop';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AsTheCrowFliesService {

  constructor(private http: HttpClient) { }

  shops: Array<BikeShop> = [];
  myCoords: any;
  closestCoords: any;
  origin: any;
  destination: any;

  getMyCoords(): any {
    return this.myCoords;
  }

  setMyCoords(lat: number, long: number): void {
    this.myCoords = {
      lat: lat,
      lng: long,
    };
  }

  setClosestCoords(coords: any) {
    this.closestCoords = coords;
  }

  getClosestCoords(): any {
    console.log('humpty dumpty!');
    return this.closestCoords;
  }

  getShopCoords(): any {
    return this.shops;
  }

  setShopAddresses(shops: Array<BikeShop>): void {
    for (let i = 0; i < shops.length; i++) {
      this.shops[i] = shops[i];
      let fullAddress: string = shops[i].address.street + ' '
        + shops[i].address.city + ', '
        + shops[i].address.state + ' '
        + shops[i].address.zip;
      this.shops[i].address.full = fullAddress;
    }
  }

/*
  *************************************************************************
  *** local storage functions
  *************************************************************************
*/

addItemToSessionStorage(itemName: string, destination: any): void {
  window.sessionStorage.setItem(itemName, JSON.stringify(destination));
}

getItemFromSessionStorage(itemName: string): any {
  return window.sessionStorage.getItem(itemName);
}

getItemFromLocalStorage(itemName: string): any {
  return window.localStorage.getItem(itemName);
}

}

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BikeShop } from '../models/bike-shop';

@Injectable({
  providedIn: 'root'
})
export class BikeshopAddressService {

  constructor(private http: HttpClient) { }

  getShops(): Observable<BikeShop[]> {
    return this.http
      .get<BikeShop[]>('assets/bikeShops.json');
  }

}




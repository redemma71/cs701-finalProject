import { Component, Input, OnInit, NgZone, ViewChild, } from '@angular/core';
import { AgmCoreModule, MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services/google-maps-api-wrapper';
import { AgmDirectionModule as GoogleMapsDirections } from 'agm-direction';
import { BikeshopAddressService } from '../../services/bikeshop-address.service';
import { AsTheCrowFliesService } from '../../services/as-the-crow-flies.service';
import { BikeShop } from 'src/app/models/bike-shop';

declare let google: any;

interface Marker {
  lat: number;
  long: number;
  label?: string;
  draggable: boolean;
}

interface Location {
  lat: number;
  long: number;
  viewport?: Object;
  zoom: number;
  address_level_1?: string;
  address_level_2?: string;
  address_city?: string;
  address_state?: string;
  address_zip?: string;
  address_country?: string;
  marker?: Marker;
}

@Component({
  selector: 'app-bikeshop-find',
  templateUrl: './bikeshop-find.component.html',
  styleUrls: ['./bikeshop-find.component.css']
})

export class BikeshopFindComponent implements OnInit {

  private geocoder: any;
  public shops: Array<BikeShop>;
  public shopCoords: Array<any> = [];
  public origin: any;
  public destination;
  public dataHasReturned = false;
  public losestShop: BikeShop;
  public myAddress: any;

  public destinationShop: any;
  public destinationDistance: number;
  public destinationPhone: number;
  public destinationAddress: string;
  public travelMode = 'BICYCLING';
  public myLat: any;
  public myLong: any;

  // for testing
  // sample origins
  private mtAiryCoords = {'lat': 39.37442, 'lng': -77.153455};
  private catonsvilleCoords = {'lat': 39.2713168, 'lng': -76.7330446};
  private mtWashingtonCoords = {'lat': 39.2975378, 'lng': -76.6156727};


  public markerOptions: any = {
    origin: {
      infoWindow: 'This is your current location.',
      draggable: true,
      opacity: 1
    },
    destination: {
      infoWindow: 'This is your destination.',
      opacity: 1
    }
  };

  @ViewChild(AgmMap) map: AgmMap;

  find(): void {
    let closestShopDistance: number = 1000;
    for (let i = 0; i < this.shopCoords.length; i++) {
      let distance = this.calculateHaversine(this.origin, this.shopCoords[i]);
      if ( distance < closestShopDistance ) {
          closestShopDistance = distance;
          this.destination = this.shopCoords[i];
          this.destinationShop = this.shops[i].name;
          this.destinationDistance = distance;
          this.destinationPhone = this.shops[i].phone;
          this.destinationAddress = this.shops[i].address.full;
          this.crowService.setClosestCoords(this.destination);
          window.sessionStorage.setItem('my_destination_address', this.destinationShop);
      }
    }
    document.getElementById('closest-shop-div').removeAttribute('hidden');
    document.getElementById('button-div').setAttribute('hidden', 'true');
    this.crowService.addItemToSessionStorage('my_destination', this.destination);
  }

  toRad(num: number) {
    return num * Math.PI / 180;
  }

  calculateHaversine(coords1: any, coords2: any): number {

      let lat1 = coords1.lat;
      let long1 = coords1.lng;
      let lat2 = coords2.lat;
      let long2 = coords2.lng;

      let R = 6371; // diameter of earth in km

      let dLat = lat2 - lat1;
      let dLatRad = this.toRad(dLat);
      let dLong = long2 - long1;
      let dLongRad = this.toRad(dLong);
      let a = Math.sin(dLatRad / 2) * Math.sin(dLatRad / 2) +
        Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
        Math.sin(dLongRad / 2) * Math.sin(dLongRad / 2);
      let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      let d = R * c;

      return d;
    }

    getLocation(options?: any): any {
    const OPTIONS: any = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
  };
    return new Promise( (resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, OPTIONS);
    });
  }

  getAddress(myLat: number, myLong: number): any {
    return new Promise( (resolve, reject) => {
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyDYTlR5ovb1iHLXkP0SQNiXuuPp8iM5uD8`;
    });
  }

  setShopCoords(shops: any): void {
    for (let i = 0; i < shops.length; i++) {
      this.shopCoords[i] = shops[i].coords;
    }
  }

  constructor(
    public mapsApiLoader: MapsAPILoader,
    private zone: NgZone,
    private wrapper: GoogleMapsAPIWrapper,
    private service: BikeshopAddressService,
    private crowService: AsTheCrowFliesService,
    private addressService: BikeshopAddressService ) {
  }

  ngOnInit() {

    this.service.getShops()
    .subscribe( response => {
      this.shops = response;
      this.setShopCoords(response);
    });

    this.getLocation()
    .then( (position) => {
      this.myLat = position.coords.latitude;
      this.myLong = position.coords.longitude;
      // test origins
      this.origin = {lat: this.myLat, lng: this.myLong};
      // this.origin = this.mtAiryCoords;
      // this.origin = this.catonsvilleCoords;
      // this.origin = this.mtWashingtonCoords;
      this.dataHasReturned = true;                    // enable find button
      window.sessionStorage.setItem('my_origin', JSON.stringify(this.origin));
    })
    .catch( (error) => {
      console.error(error.message);
    });

    this.getAddress(this.myLat, this.myLong)
    .then( (response) => {
      console.log('subscribed:');
      console.log(response);
    });

    this.addressService.loadData();

  }

}

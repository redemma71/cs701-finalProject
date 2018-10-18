import { Component, OnInit, NgZone } from '@angular/core';
import { Observable, Subject, fromEventPattern } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MapquestService } from '../../services/mapquest.service';
import { AsTheCrowFliesService } from '../../services/as-the-crow-flies.service';
import { BikeshopAddressService } from '../../services/bikeshop-address.service';

@Component({
  selector: 'app-bikeshop-turn-by-turn',
  templateUrl: './bikeshop-turn-by-turn.component.html',
  styleUrls: ['./bikeshop-turn-by-turn.component.css']
})
export class BikeshopTurnByTurnComponent implements OnInit {

  directions: Array<any>;
  route: any = [];
  legs: any;
  shops: Array<any> = [];
  public myDestination = window.sessionStorage.getItem('my_destination_address');
  private catonsvilleCoords = {'lat': 39.2713168, 'lng': -76.7330446};
  private mtWashingtonCoords = {'lat': 39.2975378, 'lng': -76.6156727};
  private origin: any;
  private destination;
  private routeObservable: Subject<Array<string>>;
  public myRoute: any;
  public originCoord: any;
  public originCoordJSON: any;

  constructor(private _mapquestService: MapquestService,
              private _crowService: AsTheCrowFliesService,
              private _addressService: BikeshopAddressService,
              private _zone: NgZone ) {
  }


  loadData(): void {
    if ( localStorage.getItem('bike_shops') === null ) {
      this._addressService.getShops()
          .subscribe( (response) => {
              this.shops = response;
          });
    } else {
      this.shops = this._crowService.getItemFromLocalStorage('bike_shops');
    }
}

  // push route into observable stream
  pushRoute(route: Array<string>): void {
    this.routeObservable.next(route);
  }

  getRoute(): any {
    console.log(this.route);
    return this.route;
  }

  getMyCoords(): any {
    return this._crowService.getMyCoords();
  }

  updateRoute() {
    this.pushRoute(this.myRoute);
  }

  getAddress(myLat: any, myLong: any): any {
    return new Promise( (resolve, reject) => {
      return `https://us1.locationiq.com/v1/reverse.php?key=e5418c93c89e52&lat=${myLat}&lon=${myLong}&format=json`;
    });
  }


  getFullAddress(myCoords: any): any {
      let myCoordsJSON = JSON.parse(myCoords);
      let myLat = myCoordsJSON.lat;
      let myLong = myCoordsJSON.lng;
    for (let i = 0; i < this.shops.length; i++) {
      if (this.shops[i].coords.lat === myLat && this.shops[i].coords.lng === myLong) {
        return this.shops[i].address.street + ' ' + this.shops[i].address.city
              + ', ' + this.shops[i].address.city + ' ' + this.shops[i].address.zip;
      }
    }
    return 'Baltimore, Maryland USA';
  }

  setCoords(): void {
    this.originCoord = this._crowService.getItemFromSessionStorage('my_origin');
    this.originCoordJSON = JSON.parse(this.originCoord);
    let myLat = this.originCoordJSON.lat;
    let myLong = this.originCoordJSON.lng;
    // not working
    // this.origin = `https://us1.locationiq.com/v1/reverse.php?key=e5418c93c89e52&lat=${myLat}&lon=${myLong}&format=json`;
    // not working
    // this.getAddress(myLat, myLong)
    //    .then( (address) => {
    //      this.origin = address;
    //    })
    //   .catch( (error) => {
    //      console.error(error.message);
    //   });
    // so, hard-coding the origin
    // for testing
    this.origin = '9 Augusta Ridge Road, Reisterstown, MD 21136 USA';
    let mtAiryAddress: string =  '101 Park Ave, Mt Airy, MD 21771, USA';
    let catonsvilleAddress: string = '743 Frederick Rd, Catonsville, MD 21228, USA';
    let mtWashingtonAddress: string = '699 Washington Place, Baltimore, MD 21201, USA';
    let destinationCoord = this._crowService.getItemFromSessionStorage('my_destination');
    this.destination = this.getFullAddress(destinationCoord);
    console.log(this.destination);
    this.myRoute = [this.origin, this.destination];
    this.updateRoute();
  }

  ngOnInit() {
    this.routeObservable = new Subject<Array<string>>();

    this.routeObservable.pipe(
      switchMap( (route: Array<string>) => {
        return this._mapquestService.getDirections(route);
      }))
      .subscribe(
        (result: any) => {
          this.route = result;
          this.legs = result.route.legs[0].maneuvers;
        },
        (err: any) => {
          console.error(err);
        });



      this._addressService.getShops()
          .subscribe( (response) => {
              this.shops = response;
              this.setCoords();
          });


  }

}

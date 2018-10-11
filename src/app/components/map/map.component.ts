import { Component, Input, OnInit, NgZone, ViewChild, } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services/google-maps-api-wrapper';

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
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  geocoder: any;

  public location: Location = {
    lat: 39.283889,
    long: -76.621667,
    marker: {
      lat: 39.283889,
      long: -76.621667,
      draggable: true,
    },
    zoom: 15
  };

  @ViewChild(AgmMap) map: AgmMap;

  updateOnMap(): void {
    let full_address: string = this.location.address_level_1 || '';
    if (this.location.address_level_2) {
      full_address += ' ';
      full_address += this.location.address_level_2;
    }
    if (this.location.address_city) {
      full_address += ' ';
      full_address += this.location.address_city;
    }

    if (this.location.address_state) {
      full_address += ' ';
      full_address += this.location.address_state;
    }

    if (this.location.address_zip) {
      full_address += ' ';
      full_address += this.location.address_zip;
    }
    this.findLocation(full_address);
  }

  findLocation(address: string): void {
    if (!this.geocoder) {
      this.geocoder = new google.maps.Geocoder();
    }
    this.geocoder.geocode({'address': address}, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {

        for (let i = 0; i < results[0].address_components.length; i++) {
            let types = results[0].address_components[i].types;

            if (types.indexOf('locality') !== -1) {
              this.location.address_level_2 = results[0].address_components[i].long_name;
            }
            if (types.indexOf('country') !== -1) {
              this.location.address_country = results[0].address_components[i].long_name;
            }
            if (types.indexOf('postal_code') !== -1) {
              this.location.address_zip = results[0].address_components[i].long_name;
            }
            if (types.indexOf('administrative_area_level_1') !== -1) {
              this.location.address_state = results[0].address_components[i].long_name;
            }
          }

        if (results[0].geometry.location) {
          this.location.lat = results[0].geometry.location.lat();
          this.location.long = results[0].geometry.location.lng();
          this.location.marker.lat = results[0].geometry.location.lat();
          this.location.marker.long = results[0].geometry.location.lng();
          this.location.marker.draggable = true;
          this.location.viewport = results[0].geometry.viewport;
        }
          console.log('results: ');
          console.log(results);
          this.map.triggerResize();
      } else {
        alert('Sorry, this search returned no results.');
      }
    });
  }

  yadda(): void {
    console.log('yadda');
  }

  constructor(public mapsApiLoader: MapsAPILoader, private zone: NgZone,
              private wrapper: GoogleMapsAPIWrapper) {
    this.mapsApiLoader = mapsApiLoader;
    this.zone = zone;
    this.wrapper = wrapper;
    this.mapsApiLoader.load().then( () => {
      this.geocoder = new google.maps.Geocoder();
    });
  }

  ngOnInit() {
    this.location.marker.draggable = true;
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapquestService {

  constructor(private http: HttpClient) { }

  getDirections(route: Array<string>): Observable<any> {
    let from = route[0];
    let to = route[1];
    let mapquestUrl =
      `http://open.mapquestapi.com/directions/v2/route?key=I9cVIOffUqMoMKhdvbhEUt6LWcpWfeML&from=${from}&to=${to}`;
    return this.http
           .jsonp(mapquestUrl, 'callback');
  }
}




import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ModalService } from './services/modal.service';
import { BikeshopAddressService } from './services/bikeshop-address.service';
import { ModalComponent } from './components/modal/modal.component';
import { BikeshopComponent } from './components/bikeshop/bikeshop.component';
import { TelephonePipe } from './pipes/telephone.pipe';
import { BikeshopFindComponent } from './components/bikeshop-find/bikeshop-find.component';
import { BikeshopWishlistComponent } from './components/bikeshop-wishlist/bikeshop-wishlist.component';
import { MapComponent } from './components/map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    BikeshopComponent,
    TelephonePipe,
    BikeshopFindComponent,
    BikeshopWishlistComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDtTbqv-iVqRHFy8WaQ-Ca306nvDgpQKHE'}),
    ButtonsModule.forRoot(),
  ],
  providers: [
    BikeshopAddressService,
    ModalService,
    GoogleMapsAPIWrapper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

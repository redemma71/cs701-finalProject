import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { BikeshopComponent } from '../app/components/bikeshop/bikeshop.component';
import { BikeshopFindComponent } from '../app/components/bikeshop-find/bikeshop-find.component';
import { BikeshopWishlistComponent } from '../app/components/bikeshop-wishlist/bikeshop-wishlist.component';
import { MapComponent } from '../app/components/map/map.component';

const routes: Routes = [
  { path: '',           component: BikeshopFindComponent },
  { path: 'shops',      component: BikeshopComponent },
  { path: 'wishlist',   component: BikeshopWishlistComponent },
  { path: 'map',        component: MapComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

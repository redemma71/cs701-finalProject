import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { BikeshopComponent } from '../app/components/bikeshop/bikeshop.component';
import { BikeshopFindComponent } from '../app/components/bikeshop-find/bikeshop-find.component';
import { BikeshopWishlistComponent } from '../app/components/bikeshop-wishlist/bikeshop-wishlist.component';
import { BikeshopDirectionsComponent } from '../app/components/bikeshop-directions/bikeshop-directions.component';
import { BikeshopTurnByTurnComponent } from '../app/components/bikeshop-turn-by-turn/bikeshop-turn-by-turn.component';
import { BikeshopWishlistButtonComponent } from '../app/components/bikeshop-wishlist-button/bikeshop-wishlist-button.component';
import { BikeshopWishlistBrowseComponent } from '../app/components/bikeshop-wishlist-browse/bikeshop-wishlist-browse.component';

const routes: Routes = [
  { path: '',                                   component: BikeshopFindComponent },
  { path: 'find',                               component: BikeshopFindComponent },
  { path: 'shops',                              component: BikeshopComponent },
  { path: 'wishlist',                           component: BikeshopWishlistButtonComponent },
  { path: 'add',                                component: BikeshopWishlistComponent },
  { path: 'browse',                             component: BikeshopWishlistBrowseComponent },
  { path: 'directions',                         component: BikeshopDirectionsComponent },
  { path: 'turn-by-turn',                       component: BikeshopTurnByTurnComponent }
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

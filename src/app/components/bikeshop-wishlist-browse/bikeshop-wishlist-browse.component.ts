import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikeshop-wishlist-browse',
  templateUrl: './bikeshop-wishlist-browse.component.html',
  styleUrls: ['./bikeshop-wishlist-browse.component.css']
})
export class BikeshopWishlistBrowseComponent implements OnInit {

  bikes: Array<any> = [];
  bikeId: string;
  wishlist: Array<any>;
  wishlistForBike: Array<any> = [];

  getWishlist(): Array<any> {
    this.wishlistForBike = [];        // empty wishlist
    for (let i = 0; i < this.wishlist.length; i++) {
      if (this.wishlist[i].bike.id === this.bikeId ) {
        this.wishlistForBike.push(this.wishlist[i]);
      }
    }
    return this.wishlistForBike;
  }

  constructor() { }

  ngOnInit() {
    this.bikes = JSON.parse(window.localStorage.getItem('bikes'));
    this.wishlist = JSON.parse(window.localStorage.getItem('wishlist'));
  }

}

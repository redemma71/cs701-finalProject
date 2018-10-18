import { Component, OnInit } from '@angular/core';
import { WishlistItem } from '../../models/wishlist-item';
interface Bike {
  id: number;
  name: string;
  type: string;
}
@Component({
  selector: 'app-bikeshop-wishlist',
  templateUrl: './bikeshop-wishlist.component.html',
  styleUrls: ['./bikeshop-wishlist.component.css']
})

export class BikeshopWishlistComponent implements OnInit {

  public wishlist: Array<WishlistItem>;
  public bikes: Array<Bike>;
  public bikeId: number;
  public wishlistItemId: number;
  public bikeName: string;
  public itemName: string;
  public itemQuantity: number;


  createWishlistItem(id: number): WishlistItem {
    let wishlistItem: WishlistItem = {
      bike: {
        id: id,
      },
      itemId: this.wishlistItemId,
      item: this.itemName,
      quantity: this.itemQuantity,
    };
    this.wishlistItemId++;
    return wishlistItem;
  }

  onSubmit(bikeId: number): void {
    let wishlistItem = this.createWishlistItem(bikeId);
    this.wishlist.push(wishlistItem);
    this.addToLocalStorage();
  }

  yadda(): void {
    console.log(this.wishlist);
  }

  getBikeId(): number {
    return this.bikeId;
  }

  getWishlistItemId(): number {
    return this.getWishlistItemId();
  }


  /**========================================================
   ** local storage convenience functions
  =========================================================*/

  getFromLocalStorage(): Array<WishlistItem> {
    return JSON.parse(window.localStorage.getItem('wishlist'));
  }

  loadData(): void {
    if ( localStorage.getItem('wishlist') === null ) {
      this.wishlist = [];
      this.wishlistItemId = 0;
    } else {
        this.wishlist = this.getFromLocalStorage();
        this.wishlistItemId = this.wishlist.length;
    }
  }

  addToLocalStorage() {
    window.localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
  }


  constructor() {
    this.bikes = [];
    this.loadData();
    this.bikes.push({
      id: 0,
      name: 'lightspeed',
      type: 'titanium'
    });
    this.bikeId++;
    this.bikes.push({
      id: 1,
      name: 'iro',
      type: 'steel'
    });
    this.bikeId++;
    window.localStorage.setItem('bikes',JSON.stringify(this.bikes));
  }

  ngOnInit() {
  }
}

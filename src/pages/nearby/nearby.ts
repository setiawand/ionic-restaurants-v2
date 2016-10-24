import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestaurantService } from '../../providers/restaurant-service';
import { Details } from '../details/details';

@Component({
  selector: 'page-nearby',
  templateUrl: 'nearby.html'
})
export class Nearby {

  restaurants: Array<any>;
  searchTerms: Array<any>;

  constructor(public navCtrl: NavController, public restaurantService: RestaurantService) {
    this.searchTerms = [
      {'term': 'Restaurants', 'icon': 'restaurant'},
      {'term': 'Bars', 'icon': 'beer'},
      {'term': 'Coffee', 'icon': 'cafe'}      
    ]
  }

  ionViewWillEnter() {
    this.restaurantService.getRestaurants()
      .subscribe(res => this.restaurants = res);
  }

  search(searchTerm?: string) {
    this.restaurantService.setSearchTerm(searchTerm);
    this.navCtrl.parent.select(1);
  }

  showDetails(details: Object) {
    this.navCtrl.push(Details, details);
  }

}
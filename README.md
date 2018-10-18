# FindMyBikeshop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.4.

## Google Developer API keys

The Google Developer keys are authorized to work on `http://localhost:4200`, `http://localhost:4242`, or `http://localhost:8888`.

## NPM Dependencies

The NPM dependencies have not been included in this zip file. To install depdenencies, navigate into the directory `find-my-bikeshop` and type `npm install`. After installing depdendencies, you may start the dev server.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. 

## Changing the Origins for Testing Purposes
To test that the nearest bicycle shop is found, change the value of the `origin` variable in `bikeshop-find.component.ts.` Assigning the Mt. Airy origin will return a shop in Mt. Airy, and assigning the Catonsville origin will return a shop in Catonsville. The "Map It" version of the map works as-is. 

The turn-by-turn version of the map uses Mapquest's API, which takes a string address. I was unable to convert latitude & longitude into a string address using two different APIs (Google Reverse Lookup and the locationiq.com API in the code), so I have hardcoded the addresses for the demo. To get the turn-by-turn directions to work, you must also change the `origin` variable in `bikeshop-turn-by-turn.component.ts` so that it agrees with the `origin` variables in `bikeshop-find.component.ts.` If the former points to a Mt. Airy origin, the latter must also point to Mt. Airy, and the like.

## Usage

"Find My Bikeshop" uses geolocation to determine the shortest bikeshop. The data consists of some 30+ bicycle shops in and around Baltimore, Maryland. Click on the "Find My Shop" to run the algorithm that determines the closest shop. The search will return a screen with the shop's name, address, phone, and links to "Map It" and for "Turn-by-turn directions." "Map It" will launch a Google Map with a map of the route from origin and destination. "Turn-by-turn directions" will launch a turn-by-turn itinerary, drawn from the Mapquest API.

The app also contains a rudimentary Wishlist. Simply choose "My Wishlist", and you will be presented with the options to "Add to Wishlist" and "Browse Wishlist". There are two bicycles hard-coded into the app, but you will be able to add new items & quantites to each bike, and to browse each list, sorted by bicycle.

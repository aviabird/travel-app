import { Observable } from 'rxjs/Observable';
import { Trip } from './../models/trip';
import { Injectable } from '@angular/core';

@Injectable()
export class TripsService {

  trips: Trip[];
  constructor() { 
    this.trips = [
      {
        id: "1",
        startDate: new Date("12-03-2016").toDateString(),
        endDate: new Date("12-12-2016").toDateString(),
        description: "Las Vegas Trip",
        status: "ongoing", // A validation for inclusion
        cities: [
          { name: "Pune",
            country: "India",
            places: [
              { 
                name: "Aga Khan palace", // restaurant, tourist attraction, airport, etc
                description: "Very nice place",
                review: "Very nice place", 
                media: [
                  {
                    link: "http://lorempixel.com/400/200",
                    description: "Had so much fun here"
                   }
                ]
               }
            ]
          }
        ]
      },
      {
        id: "2",
        startDate: new Date("01-26-2016").toDateString(),
        endDate: new Date("02-04-2016").toDateString(),
        description: "Dubai Trip",
        status: "completed",
        cities: [
          { name: "Pune",
            country: "India",
            places: [
              { 
                name: "Koregaon park", // restaurant, tourist attraction, airport, etc
                description: "Very nice place",
                review: "Very nice place", 
                media: [
                  {
                    link: "http://lorempixel.com/400/200",
                    description: "Had so much fun here"
                   }
                ]
               },
              { 
                name: "Koregaon park", // restaurant, tourist attraction, airport, etc
                description: "Very nice place",
                review: "Very nice place", 
                media: [
                  {
                    link: "http://lorempixel.com/400/200",
                    description: "Had so much fun here"
                   }
                ]
               },
              { 
                name: "Koregaon park", // restaurant, tourist attraction, airport, etc
                description: "Very nice place",
                review: "Very nice place", 
                media: [
                  {
                    link: "http://lorempixel.com/400/200",
                    description: "Had so much fun here"
                   }
                ]
               }
            ]
          },
          { name: "Dubai",
            country: "UAE",
            places: [
              { 
                name: "Burj Khalifa", // restaurant, tourist attraction, airport, etc
                description: "Very nice place",
                review: "Very nice place", 
                media: [
                  {
                    link: "http://lorempixel.com/400/200",
                    description: "Had so much fun here"
                   }
                ]
               },
              { 
                name: "Burj Khalifa", // restaurant, tourist attraction, airport, etc
                description: "Very nice place",
                review: "Very nice place", 
                media: [
                  {
                    link: "http://lorempixel.com/400/200",
                    description: "Had so much fun here"
                   }
                ]
               }
            ]
          }
        ]
      }
    ]
  }


// use map function to find the particular trip, so that it will not 
// traverse the whole array, as it is doing with the current implementation.
  getTrip(tripIndex: string): Trip {
    return this.trips.filter((trip) => {
       return trip.id == tripIndex;
    })[0]
  }

  getTrips(): Observable<Trip[]>{
    return Observable.of(this.trips);
  }

}

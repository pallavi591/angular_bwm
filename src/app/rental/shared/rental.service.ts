import { Rental } from './rental.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class RentalService {
    private rentals: Rental[] = [{
        id: "1",
        title: "Central Apartment",
        city: "New York",
        street: "Times square",
        category: "apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "3 bedroom apartment",
        dailyRate: 34,
        shared: false,
        createdAt: '24/12/2017'
    },
    {
        id: "2",
        title: "Central Apartment 2",
        city: "New Delhi",
        street: "inner circle",
        category: "condo",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 2,
        description: "2 bedroom condo",
        dailyRate: 14,
        shared: true,
        createdAt: '24/12/2017'
    },
    {
        id: "3",
        title: "Central Apartment 3",
        city: "Mumbai",
        street: "Juhu",
        category: "house",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 5,
        description: "5 bedroom house",
        dailyRate: 334,
        shared: false,
        createdAt: '24/12/2017'
    },
    {
        id: "4",
        title: "Central Apartment 4",
        city: "goa",
        street: "beach",
        category: "condo",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 5,
        description: "5 bedroom shared condo",
        dailyRate: 34,
        shared: true,
        createdAt: '24/12/2017'
    }];
    public getRentalById(rentalId: string): Observable<Rental> {
        return new Observable<Rental>((observer) => {
            setTimeout(() => {
                const foundRental = this.rentals.find((rentals) => {
                    return rentals.id == rentalId;
                });
                observer.next(foundRental);
            }, 500);
        });
    }
    public getRentals(): Observable<Rental[]> {
        const rentalObservable: Observable<Rental[]> = new Observable((observer) => {
            setTimeout(() => {
                observer.next(this.rentals)
            }, 1000);
            setTimeout(() => {
                observer.error(" has error")
            }, 2000);
            setTimeout(() => {
                observer.complete()
            }, 3000);
        });
        return rentalObservable;
    }
}
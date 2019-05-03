import { RentalService } from './../shared/rental.service';
import { Component, OnInit } from '@angular/core';
import { Rental } from '../shared/rental.model';


@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {
  rentals: Rental[] = [];
  constructor(private rentalservice: RentalService) { }

  ngOnInit() {
    const rentalObservables = this.rentalservice.getRentals();
    rentalObservables.subscribe((rentals:Rental[]) => {
      this.rentals = rentals;
    }, (err) => { }, () => { });
  }

}

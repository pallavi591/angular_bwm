import { MapService } from './map.service';
import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'bwm-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  @Input() location: string;
  isPositionError: Boolean = false;

  lat: number;
  lng: number;
  constructor(private mapService: MapService, private ref: ChangeDetectorRef) { }

  mapReadyHandler() {
    this.mapService.getGeoLocation(this.location).subscribe((coordinates) => {
      this.lat = coordinates.lat;
      this.lng = coordinates.lng;
      this.ref.detectChanges();
    }, () => {
      this.isPositionError = true;
    });
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'custom-style-id',
  template: `
    <mgl-map
      [style]="'mapbox://styles/mapbox/dark-v9'"
      [zoom]="[3]"
      [center]="[-77.38, 39]"
    >
    </mgl-map>
  `,
  styleUrls: ['./examples.css'],
})
export class CustomStyleIdComponent {}

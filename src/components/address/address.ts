import {Component, Input} from '@angular/core';

/**
 * Generated class for the AddressComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'address-segment',
  templateUrl: 'address.html'
})
export class AddressComponent {


  @Input()
  address:string;

  constructor() {

  }

}

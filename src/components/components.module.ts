import { NgModule } from '@angular/core';
import { AddressComponent } from './address/address';
import {IonicModule} from "ionic-angular";
@NgModule({
	declarations: [AddressComponent],
	imports: [IonicModule],
	exports: [AddressComponent]
})
export class ComponentsModule {}

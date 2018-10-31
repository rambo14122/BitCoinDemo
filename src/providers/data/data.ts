import { Injectable } from '@angular/core';



@Injectable()
export class DataProvider {

  address;
  assets=100;

  constructor() {
    this.address = ["1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2","3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy","bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq"];
  }

}

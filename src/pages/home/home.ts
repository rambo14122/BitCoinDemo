import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";
import {QRScanner, QRScannerStatus} from "@ionic-native/qr-scanner";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selectedAddr = "";
  bitCoinAmount = 0;
  yenAmount = 0;
  readonly EX_RATE = 100;

  constructor(public navCtrl: NavController,
              private qrScanner: QRScanner,
              public data: DataProvider) {
    this
      .selectedAddr = this.data.address[0];
  }

  handleBitCoinChange() {
    this.yenAmount = this.bitCoinAmount * this.EX_RATE;
  }

  handleYenChange() {
    this.bitCoinAmount = this.yenAmount / this.EX_RATE;
  }

  scanQR() {
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted


          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
            this.data.address.push(text);
            this.selectedAddr = text;
            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
          });

        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

}

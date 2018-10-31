import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DataProvider } from '../providers/data/data';
import {NgxQRCodeModule} from "ngx-qrcode2";
import {ComponentsModule} from "../components/components.module";
import {QRScanner} from "@ionic-native/qr-scanner";

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    QRScanner,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}

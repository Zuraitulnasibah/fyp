import { Component, ViewChild  } from '@angular/core';
import { Platform, MenuController, NavController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsPage } from '../pages/settings/settings'; 
import {TabsPage} from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  settingsPage: any = SettingsPage;

  @ViewChild('nav') nav: NavController;
  constructor(platform: Platform, statusBar: StatusBar, private menuCtrl : MenuController,splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
    onLoad(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
}


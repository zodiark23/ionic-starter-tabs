import { Component } from '@angular/core';

import { NavController , AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: AlertController) {

  }

  

  showAlert(){
    let alert = this.navCtrl.create({
      title : 'New Subscriber',
      subTitle: 'Your friend, Obi wan Kenobi, just subscribe to your channel!',
      buttons : ['Ok']
    });


    alert.present();
    
  }

}

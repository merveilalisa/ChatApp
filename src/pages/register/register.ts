import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {} from '../../models/login/login-response.interface';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
  }


  register(event){
  if(!event.error){
      this.toast.create({
        message: `Account created: ${event.result.email}`,
        duration: 3000
      }).present();
    }
    else{
      this.toast.create({
        message: `Account was not created: ${event.error.message}`,
        duration: 3000
      }).present();

    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
import { Component,EventEmitter, Output } from '@angular/core';
import {NavController} from 'ionic-angular';
import  { Account } from '../../models/account/account.interface';
import {LoginResponse} from '../../models/login/login-response.interface'
// import { RegisterPage } from '../../pages/register/register';
import { AuthService } from '../../providers/auth/auth.service'

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  account = {} as Account;
  @Output() loginStatus: EventEmitter<LoginResponse>;


  constructor(private auth: AuthService, private navCtrl: NavController) {
      this.loginStatus = new EventEmitter<any>();
  }

  async login() {
   const loginResponse = await this.auth.signInWithEmailAndPassword(this.account);
    this.loginStatus.emit(loginResponse);
  }

  navigateToRegisterPage(){
    this.navCtrl.push('RegisterPage');
  }

  // navigateToPage(pageName: string){
  //   //If statement that disbales back button for login purposes
  //   pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  // }

}

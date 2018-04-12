import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MESSAGE_LIST} from '../../mocks/messages/messages'
import {Message} from '../../models/messages/message.interface';


/**
 * Generated class for the IboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ibox',
  templateUrl: 'ibox.html',
})
export class IboxPage {

  //must be a type of Message array 

  messageList:Message[] = MESSAGE_LIST;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(){
    console.log(this.messageList)
  }


  navigateToSearchUserPage(){
    this.navCtrl.push('SearchUserPage');
  }


}

import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {IboxPage} from '../ibox/ibox';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root:any;
  tab2Root:string;
  tab3Root:string;



  constructor() {
    this.tab1Root = IboxPage;
    this.tab2Root = 'ChannelsPage';
    this.tab3Root = 'ProfilePage';

  }

 

}

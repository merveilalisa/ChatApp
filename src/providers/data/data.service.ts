import { Injectable } from '@angular/core';
import { FirebaseListObservable} from 'angularfire2/database-deprecated/';
import { AngularFireDatabase} from 'angularfire2/database-deprecated';
import {FirebaseObjectObservable} from 'angularfire2/database-deprecated';
// import {FirebaseObjectObservable} from 'angularfire2/database-deprecated';

import { User } from 'firebase/app';
import { Profile } from '../../models/profile/profile.interface';
import  'rxjs/add/operator/take';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataService {

  profileObject: FirebaseObjectObservable<Profile>
  profileList: FirebaseListObservable<Profile>

  constructor(private database: AngularFireDatabase) {
  }

  searchUser(firstName: string){
    return this.database.ist('/profiles/', query => {
    query.orderByChild('firstName').equalTo(firstName).valueChanges().take(1);
  });
}
  

  getProfile(user: User){
    this.profileObject = this.database.object(`/profiles/${user.uid}`, {preserveSnapshot: true})
    return this.profileObject.take(1);
  }


  async saveProfile(user: User, profile: Profile){
      this.profileObject = this.database.object(`/profiles/${user.uid}`)


      try {
       await this.profileObject.set(profile);
       return true;
      }
      catch(e){
          console.error(e);
          return false;
      }
    }

}

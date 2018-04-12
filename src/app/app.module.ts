import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IboxPage } from '../pages/ibox/ibox';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth'
import { MyApp } from './app.component';
import {FIREBASE_CONFIG} from './app.firebase.config';
import { AuthService } from '../providers/auth/auth.service';
import { DataService } from '../providers/data/data.service';
import{AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireDatabase} from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import {FirebaseObjectObservable}  from 'angularfire2/database-deprecated';




@NgModule({
  declarations: [
    MyApp, IboxPage, 
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ComponentsModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, IboxPage, 
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    DataService,
    AngularFireDatabase
    
    
  ]
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( public afAuth: AngularFireAuth , private router: Router) {
  }
  loginFB() {
     this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
  loginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider).then(function(result) {
     // This gives you a Google Access Token.
     const token = result.credential.accessToken;
     // The signed-in user info.
      const user = result.user;
       console.log(user) ;
       console.log(user.displayName);
    });
 }

 logout() {
  this.afAuth.auth.signOut();
}


  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
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
  user: Observable<firebase.User>;
  constructor( public afAuth: AngularFireAuth , private router: Router) {
  }
  loginFB() {
     this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
  loginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider).then(
      (userInfo) => {
      // You are now logged in
      // Maybe redirect to the first logged in page
      const user = userInfo.user;
      // console.log(user);
       this.router.navigate([ 'signup' ]);
    })
    .catch((error) => {
      // Ran into some issues
      // Maybe report the error on your sign in page
    });
  //     function(result) {
  //    // This gives you a Google Access Token.
  //    var token = result.credential.accessToken;
  //    // The signed-in user info.
  //    var user = result.user;
  //      console.log(user) ;
  //      console.log(user.displayName);
  //   }    
  // );    
  }

 logout() {
  this.afAuth.auth.signOut();
}


  ngOnInit() {
  }

}

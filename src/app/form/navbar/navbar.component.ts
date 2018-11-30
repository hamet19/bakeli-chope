import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase  from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private isLoginIn: Boolean=false;

  constructor(public db:AngularFireDatabase,public router:Router ,public afAuth: AngularFireAuth) { 
    
    let  status=localStorage.getItem('isLoginIn')
      
    console.log(status)

    if(status==='true'){
      this.isLoginIn=true
    }else{
      this.isLoginIn=false
    }
  }

  ngOnInit() {
  }
  logOut(){
    this.afAuth.auth.signOut()
    this.isLoginIn=false;
    localStorage.setItem('isLoginIn','false')
    this.router.navigate(['home'])
    alert("Vous n'ete plus en ligne")
  }

}

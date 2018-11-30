import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email:string='';
  password:string='';
 

  constructor(private fire:AngularFireAuth,private router:Router) { }

  ngOnInit() {
  }

  login(){
    this.fire.auth.signInWithEmailAndPassword(this.email,this.password)
    .then(user=>{
      localStorage.setItem('isLoginIn','true')
      this.router.navigate(['home'])
      alert('Connection Reussie')


     
    }).catch(error=>{
      console.error(error)
    })
  }
}

import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email:string='';
  password:string='';
 reapetpassword:string='';


  constructor(private fire:AngularFireAuth,private router:Router) { }

  ngOnInit() {
  }

  registre(){
    if(this.password==this.reapetpassword){
      this.fire.auth.createUserWithEmailAndPassword(this.email,this.password)
      .then(user=>{
        localStorage.setItem('isLoginIn','false')
        this.router.navigate(['home'])
      }).catch(error=>{
        console.error(error)
      })
    }else console.log("le mot de passes ne correspondent pas")
   
  }

}



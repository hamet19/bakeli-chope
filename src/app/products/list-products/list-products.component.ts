import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  itemList:AngularFireList<any>
  itemArray=[]


  constructor(public db:AngularFireDatabase, public router:Router) {
    this.itemList=db.list('Add-products')

    
    this.itemList.snapshotChanges()
    .subscribe(actions=>{
      actions.forEach(action=> {
        let y=action.payload.toJSON()
        y["$key"]=action.key
        this.itemArray.push(y as ListItemClass)
        
      }); 
    })
    console.log(this.itemArray);
   }

  ngOnInit() {
  }

}
export class ListItemClass{
  $key:string;
  name:string;
  price:string;
  quantity:string

}

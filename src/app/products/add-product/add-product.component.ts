import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 
  itemList:AngularFireList<any>

  data={
    name:'',
    price:'',
    quantity:'',
  }
  constructor(public db:AngularFireDatabase, public router:Router) { 
    this.itemList=db.list('Add-products')
  }

  ngOnInit() {
  }

  addproduct(){
    this.itemList.push({
    name:this.data.name,
    price:this.data.price,
    quantity:this.data.quantity,
    
    })

    this.router.navigate(['list-products'])
   

  }

}


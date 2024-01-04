import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  myimage:string = "assets/images/asterix.jpg"
  obelix:string = "assets/images/obelix.jpg"
  idefix:string = "assets/images/idefix.jpg"
  cesar:string = "assets/images/Cesar.jpg"

}

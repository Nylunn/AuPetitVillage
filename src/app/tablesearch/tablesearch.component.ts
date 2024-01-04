import { Component } from '@angular/core';

@Component({
  selector: 'app-tablesearch',
  templateUrl: './tablesearch.component.html',
  styleUrl: './tablesearch.component.css'
})
export class TablesearchComponent {  
  toyspipe:string ='';
  public topProducts = [
  {id: 1, name: 'Astérix', price: '12.95'},
  
  {id: 2, name: 'Obélix', price: '15.95'},
  
  {id: 3, name: 'Jules César', price: '14.95'},
  
  {id: 4, name: 'Idéfix', price: '7.95'},
];
myimage:string = "assets/images/asterix.jpg"
obelix:string = "assets/images/obelix.jpg"
idefix:string = "assets/images/idefix.jpg"
cesar:string = "assets/images/Cesar.jpg"



}

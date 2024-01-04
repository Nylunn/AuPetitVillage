import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public topProducts = [
    {id: 1, name: 'Astérix', price: '12.95'},
    
    {id: 2, name: 'Obélix', price: '15.95'},
    
    {id: 3, name: 'César,Jules César', price: '14.95'},
    
    {id: 4, name: 'Idéfix', price: '7.95'},
  ];
  myimage:string = "assets/images/asterix.jpg"
  obelix:string = "assets/images/obelix.jpg"
  idefix:string = "assets/images/idefix.jpg"
  cesar:string = "assets/images/Cesar.jpg"


  constructor(private router:Router){}

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
}

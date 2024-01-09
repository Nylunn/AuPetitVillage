import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { ObelixComponent } from './obelix/obelix.component';
import { CesarComponent } from './cesar/cesar.component';
import { AsterixComponent } from './asterix/asterix.component';
import { IdefixComponent } from './idefix/idefix.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularproject';
  logo:string= "assets/images/LogoSansTexte.jpg"

  data = [
    {id:12.95, name:"Astérix" },
    {id:14.95, name:"César" },
    {id:15.95, name:"Obélix" },
    {id:7.95, name:"Idéfix" },
  ]
searchText = '';


  myimage:string = "assets/images/asterix.jpg"
  obelix:string = "assets/images/obelix.jpg"
  idefix:string = "assets/images/idefix.jpg"
  cesar:string = "assets/images/Cesar.jpg"
  insta:string = "src/assets/images/instagram.png"
  twitter:string ="src/assets/images/X logo.png"
  
  
  constructor(private router:Router){}


  

}







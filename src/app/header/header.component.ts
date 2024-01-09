import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'angularproject';
  logo:string= "assets/images/LogoSansTexte.jpg"

  myimage:string = "assets/images/asterix.jpg"
  obelix:string = "assets/images/obelix.jpg"
  idefix:string = "assets/images/idefix.jpg"
  cesar:string = "assets/images/Cesar.jpg"
  insta:string = "src/assets/images/instagram.png"
  twitter:string ="src/assets/images/X logo.png"
  
  
  constructor(private router:Router){}


  

}




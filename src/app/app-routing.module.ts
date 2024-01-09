import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AsterixComponent } from './asterix/asterix.component';
import { ObelixComponent } from './obelix/obelix.component';
import { IdefixComponent } from './idefix/idefix.component';
import { CesarComponent } from './cesar/cesar.component';
import { LowPriceComponent } from './low-price/low-price.component';
import { HighPriceComponent } from './high-price/high-price.component';



const routes: Routes = [
  {path: 'About', component: AboutComponent},
  {path: 'Contact', component:ContactComponent},
  {path: '', component:AppComponent},
  {path: 'Asterix', component:AsterixComponent},
  {path: 'Obelix', component:ObelixComponent},
  {path: 'idefix', component:IdefixComponent},
  {path: 'Cesar', component:CesarComponent},
  {path: 'LowPrice', component:LowPriceComponent},
  {path: 'HighPrice', component:HighPriceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

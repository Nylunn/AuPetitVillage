import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { Router, RouterLink } from '@angular/router';


import { TablesearchComponent } from './tablesearch/tablesearch.component';

import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AsterixComponent } from './asterix/asterix.component';
import { ObelixComponent } from './obelix/obelix.component';
import { IdefixComponent } from './idefix/idefix.component';
import { CesarComponent } from './cesar/cesar.component';
import { LowPriceComponent } from './low-price/low-price.component';
import { HighPriceComponent } from './high-price/high-price.component';
import { SearchPipe } from './search.pipe';




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TablesearchComponent,

    FooterComponent,
    ContactComponent,
    HomeComponent,
    HeaderComponent,
    AsterixComponent,
    ObelixComponent,
    IdefixComponent,
    CesarComponent,
    LowPriceComponent,
    HighPriceComponent,
    SearchPipe,
     



  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterLink,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { TablesearchComponent } from './tablesearch/tablesearch.component';
import { FilterpipePipe } from './filterpipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    AboutComponent,
    ProductComponent,
    HomeComponent,
    ShowcaseComponent,
    TablesearchComponent,
    FilterpipePipe,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

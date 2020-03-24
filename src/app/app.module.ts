import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { KorzinaComponent } from './korzina/korzina.component';
import { ProductvkorzineService } from './productvkorzine.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    KorzinaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ProductvkorzineService],
  bootstrap: [AppComponent]
})
export class AppModule { }

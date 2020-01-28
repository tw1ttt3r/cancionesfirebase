import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListsongsComponent } from './components/listsongs/listsongs.component';
import { AddsongComponent } from './components/addsong/addsong.component';

@NgModule({
  declarations: [
    AppComponent,
    ListsongsComponent,
    AddsongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

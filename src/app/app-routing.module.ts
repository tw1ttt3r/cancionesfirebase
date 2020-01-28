import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListsongsComponent } from './components/listsongs/listsongs.component';
import { AddsongComponent } from './components/addsong/addsong.component';


const routes: Routes = [
  {path:'', component: ListsongsComponent},
  {path:'add', component: AddsongComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

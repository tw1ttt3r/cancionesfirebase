import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListsongsComponent } from './components/listsongs/listsongs.component';


const routes: Routes = [
  {path:'', component: ListsongsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

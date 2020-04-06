import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewComponentComponent} from  './new-component/new-component.component';


const routes: Routes = [
  {path: 'component'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

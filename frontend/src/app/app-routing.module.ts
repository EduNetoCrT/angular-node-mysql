import { ReadComponent } from './read/read.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from '../app/create/create.component';

const routes: Routes = [
  {path: 'create', component:CreateComponent},
  {path: 'read', component: ReadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

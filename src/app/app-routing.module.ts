import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountCorrentComponent } from './account-corrent/account-corrent.component';

const routes: Routes = [
  {path: 'account-corrent', component: AccountCorrentComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

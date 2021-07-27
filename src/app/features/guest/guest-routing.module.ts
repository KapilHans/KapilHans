import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTableComponent } from './home-table/home-table.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [{
  path:'',
  component: LayoutComponent,
  children: [
   { path: '',redirectTo: 'home'},
   {path:'home',component:HomeComponent},
   {path:'home-table',component:HomeTableComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }

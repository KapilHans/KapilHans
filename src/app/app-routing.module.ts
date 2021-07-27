import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestModule } from './features/guest/guest.module';

const routes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    redirectTo: 'volcani'
  },
  {
    path: 'volcani',
    loadChildren: () => GuestModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'public/login'},
  {path: 'public',loadChildren:()=> import('./public/public.module').then(m=>m.PublicModule)},
  {path: 'admin',loadChildren:()=> import('./admin/admin.module').then(m=>m.AdminModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

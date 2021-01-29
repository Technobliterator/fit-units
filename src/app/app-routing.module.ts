import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {CreateAccountComponent} from './create-account/create-account.component';

const routes : Routes = [
  {
    path: 'home',
     component: HomeComponent
  },
  {
     path: 'admin',
     component: AdminPageComponent
   },
   {
     path: 'sign-in',
     component: SignInComponent
   },
   {
     path: 'creat-account',
     component: CreateAccountComponent
   },
   {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

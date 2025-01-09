import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { Sign } from 'crypto';
import { Component } from '@angular/core';

export const routes: Routes = [
    {path: '', redirectTo:'/home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'sign-up', component:SignUpComponent},
    {path:'thank-you', component:ThankYouComponent}
];

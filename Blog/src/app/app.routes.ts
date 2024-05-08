import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
export const routes: Routes = [
    {
        path:'',
        component:HomeComponent

    },
    {
path:'login',
component:LoginComponent
    ,
},
{
    path:'main',
    component:MainComponent
}

];

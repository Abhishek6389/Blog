import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AddNewBlogComponent } from './add-new-blog/add-new-blog.component';
import { TravelComponent } from './categories/travel/travel.component';
import { LifestyleComponent } from './categories/lifestyle/lifestyle.component';
import { ScienceComponent } from './categories/science/science.component';
import { ArtComponent } from './categories/art/art.component';
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
},
{
    path:'add-new-blog',
    component:AddNewBlogComponent
},
{
    path:'art',
    component:ArtComponent
},
{
    path:'science',
    component:ScienceComponent
},
{
    path:'lifestyle',
    component:LifestyleComponent
},
{
    path:'travel',
    component:TravelComponent
}



];

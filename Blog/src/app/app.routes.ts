import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

import { TravelComponent } from './categories/travel/travel.component';
import { LifestyleComponent } from './categories/lifestyle/lifestyle.component';
import { ScienceComponent } from './categories/science/science.component';
import { ArtComponent } from './categories/art/art.component';
import { AddNewBlogComponent } from './add-new-blog/add-new-blog.component';
import { BlogDataComponent } from './blog-data/blog-data.component';


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
},
{
    path:'add-new-blog',
    component:AddNewBlogComponent
},

{
    path:'blog-data',
    component:BlogDataComponent
}



];

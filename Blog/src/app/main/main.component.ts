import { Component } from '@angular/core';
import { RouterLink,Router } from '@angular/router';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { AddNewBlogComponent } from '../add-new-blog/add-new-blog.component';
import { ArtComponent } from '../categories/art/art.component';
import { LifestyleComponent } from '../categories/lifestyle/lifestyle.component';
import { ScienceComponent } from '../categories/science/science.component';
import { TravelComponent } from '../categories/travel/travel.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink,BlogCardComponent,AddNewBlogComponent,ArtComponent,LifestyleComponent,ScienceComponent,TravelComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(private router: Router){}

  redirectToNewBlog() {
    this.router.navigateByUrl('/add-new-blog');
  }

  logout() {
    this.router.navigateByUrl('/login');
  }

  redirectToBlogPage(text: string) {
    // Navigate to the respective page based on the clicked text
    if (text === 'Science') {
      this.router.navigateByUrl('/science');
    } else if (text === 'Travel') {
      this.router.navigateByUrl('/travel');
    } else if (text === 'Art') {
      this.router.navigateByUrl('/art');
    } else if (text === 'Lifestyle') {
      this.router.navigateByUrl('/lifestyle');
    }
  }

}

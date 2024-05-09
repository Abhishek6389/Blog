// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-travel',
//   standalone: true,
//   imports: [],
//   templateUrl: './travel.component.html',
//   styleUrl: './travel.component.css'
// })
// export class TravelComponent {

// }

import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-travel',
  standalone: true,
  imports: [HttpClientModule , FormsModule , CommonModule],
  templateUrl: './travel.component.html',
  styleUrl: './travel.component.css'
})
export class TravelComponent implements OnInit {
  blogs: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Fetch blogs by category
    this.http.get<any[]>('https://localhost:7202/api/Blogs/Category/travel')
      .subscribe(blogs => {
        blogs.forEach(blog => {
          blog.imageUrl = 'https://source.unsplash.com/featured/?nature,landscape&w=100&h=100';
        });
        this.blogs = blogs;
      });
  }
}


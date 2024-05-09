// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-lifestyle',
//   standalone: true,
//   imports: [],
//   templateUrl: './lifestyle.component.html',
//   styleUrl: './lifestyle.component.css'
// })
// export class LifestyleComponent {

// }

import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lifestyle',
  standalone: true,
  imports: [HttpClientModule , FormsModule , CommonModule],
  templateUrl: './lifestyle.component.html',
  styleUrl: './lifestyle.component.css'
})
export class LifestyleComponent implements OnInit{
  blogs: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Fetch blogs by category
    this.http.get<any[]>('https://localhost:7202/api/Blogs/Category/lifestyle')
      .subscribe(blogs => {
        blogs.forEach(blog => {
          blog.imageUrl = 'https://source.unsplash.com/featured/?nature,landscape&w=100&h=100';
        });
        this.blogs = blogs;
      });
  }
}


export interface Blogs{
  blogId:number,
  description:string,
  title:string,
}

import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-blog',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './my-blog.component.html',
  styleUrl: './my-blog.component.css'
})
export class MyBlogComponent {
  blogs :Blogs[] =[];
  constructor(private http : HttpClient , private router :Router){}
  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if(!userId){
      console.error('User Id Not found');
      return;
    }
   
    this.http.get<Blogs[]>(`https://localhost:7202/api/Blogs/ByUser/${userId}`).subscribe(
          blogs => {
            console.log(blogs);
            this.blogs = blogs;
          },
          error => {
            console.error('Error fetching collections:', error);
          }
        );
  }
}

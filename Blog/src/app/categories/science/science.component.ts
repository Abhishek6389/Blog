import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-science',
  standalone: true,
  imports: [HttpClientModule , FormsModule , CommonModule],
  templateUrl: './science.component.html',
  styleUrl: './science.component.css'
})
export class ScienceComponent {
  blogs: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Fetch blogs by category
    this.http.get<any[]>('https://localhost:7202/api/Blogs/Category/science')
      .subscribe(blogs => {
        this.blogs = blogs;
      });
  }
}

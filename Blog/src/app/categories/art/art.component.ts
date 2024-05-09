// import { CommonModule} from '@angular/common';
// import { Component, Input, EventEmitter, Output } from '@angular/core';

// @Component({
//   selector: 'app-art',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './art.component.html',
//   styleUrl: './art.component.css'
// })
// export class ArtComponent {
//   @Input() imageUrl!: string;
//   @Input() text!: string;
//   @Output() textClicked: EventEmitter<string> = new EventEmitter<string>();

//   redirectToBlogPage() {
//     // Emit the text value to the parent component
//     this.textClicked.emit(this.text);
//   }

// }


import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-art',
  standalone: true,
  imports: [HttpClientModule , FormsModule , CommonModule],
  templateUrl: './art.component.html',
  styleUrl: './art.component.css'
})
export class ArtComponent implements OnInit{
  blogs: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Fetch blogs by category
    this.http.get<any[]>('https://localhost:7202/api/Blogs/Category/art')
      .subscribe(blogs => {
        blogs.forEach(blog => {
          blog.imageUrl = 'https://source.unsplash.com/featured/?nature,landscape&w=100&h=100';
        });
        this.blogs = blogs;
      });
  }
}

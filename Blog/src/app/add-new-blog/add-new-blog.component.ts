import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-blog',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './add-new-blog.component.html',
  styleUrl: './add-new-blog.component.css'
})
export class AddNewBlogComponent {

  title: string;
  description: string;
  selectedCategory: string;
  

  constructor(private http: HttpClient, private router: Router) {
    this.title = '';
    this.description = '';
    this.selectedCategory = 'art'; // Default category
  }

  saveChanges() {
    // Here you can implement the logic to save the new blog
     //console.log('Saving new blog...');
     //console.log('Title:', this.title);
    // console.log('Description:', this.description);
    // console.log('Category:', this.selectedCategory);
    // You can add further logic here to send data to backend or perform other actions

    // Prepare the data to be sent
    const newBlog = {
      title: this.title,
      description: this.description,
      category: this.selectedCategory
    };

    // Send a POST request to add the new blog
    this.http.post('https://localhost:7202/api/blog', newBlog)
      .subscribe((response) => {
        console.log('New blog saved successfully:', response);
        // Optionally, you can navigate to a different page after saving the blog
        this.router.navigateByUrl('/main');
      }, (error) => {
        console.error('Error saving new blog:', error);
        // Handle error, e.g., show an error message to the user
      });

  }

  cancel() {
    // Here you can implement the logic to cancel adding the new blog
    console.log('Cancelled adding new blog.');
    this.router.navigateByUrl('/main');
    
    // You can add further logic here if needed
  }

}

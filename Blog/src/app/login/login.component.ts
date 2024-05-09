// import { HttpClient, HttpClientModule} from '@angular/common/http';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [FormsModule , HttpClientModule],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {
// username: string="";
// password : string ="";

// constructor(private http:HttpClient){}
//  onSubmit(){
//   this.http.post<any>("https://localhost:7202/api/UserRegistrations",{
//   username :this.username,
//   password:this.password
//   }).subscribe((data) =>{
//     console.log(data);
//   })
//  } 


//  }
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
//   imports : [FormsModule , HttpClientModule],
//   standalone:true

// })
// export class LoginComponent {
//   username: string = "";
//   password: string = "";

//   constructor(private http: HttpClient , private router:Router) {}

//   onSubmit() {
//     this.http.post("https://localhost:7202/api/Login", {
//       username: this.username,
//       password: this.password
//     }, { responseType: 'text' }).subscribe(
//       (response: any) => {
//         this.router.navigate(['/main'])
//         console.log(response); // Log or handle the response as plain text
//       },
//       (error) => {
//         console.error("Error occurred:", error);
//       }
//     );
   
//   }
  
// }

// login.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone:true,
  imports:[FormsModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}

  onSubmit() {
    this.http.post<any>("https://localhost:7202/api/Login", {
      username: this.username,
      password: this.password
    }, { observe: 'response' }).subscribe(
      (response) => {
        console.log(response);
        const token = response.body.token;
        if (token) {
          this.authService.setToken(token);
          console.log(token);
          this.router.navigate(['/main']);
        }
        alert("invalid username or password");
      },
      
      (error) => {
        alert("invalid username or password");
        console.error("Error occurred:", error);
      }
    );
  }
}

import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink , CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(private router: Router){}

redirect(){
  this.router.navigate(['/login']);
}


}

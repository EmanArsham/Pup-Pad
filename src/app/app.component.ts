import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HomeComponent } from './home/home.component';
import { FavComponent } from './fav/fav.component';
import { DrawComponent } from './draw/draw.component';
import {RouterModule} from '@angular/router';

 
// interface Dog {
//   url: string,
// }
 
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet,RouterModule,HomeComponent,FavComponent,DrawComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent implements OnInit {
//   title = 'pet-photos';
//   pets: Dog[] = new Array
  
//   private  apiKey= 'live_6pAT89wmaNau4RpJCurGSRUsm3NPfkO92y2pq4ybYV7vWaGXx1bF4fJjJjajnnDq';
//   private http = inject(HttpClient);
//   fetchDogs(): void {
//       this.http.get<Dog[]>(`https://api.thedogapi.com/v1/images/search?api_key=${this.apiKey}&size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=15`)
//       .subscribe(data => data.forEach(pet => this.pets.push(pet)))
//   }
 
//   ngOnInit(): void {
//     this.fetchDogs()
//   }
//   loadMore(): void {
//     this.http.get<Dog[]>(`https://api.thedogapi.com/v1/images/search?api_key=${this.apiKey}&size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10`)
//       .subscribe(data => {
//         this.pets = [...this.pets, ...data];
//       });
//   }
 
//   openModal(src: string): void {
//     const modalDiv = document.getElementById('myModal');
//     const modalImg = document.getElementById('modalImage') as HTMLImageElement;
//     if(modalDiv != null) {
//       modalDiv.style.display = 'flex';
//       modalImg.src = src;
//     } 
//   }

// closeModal(): void {
//     const modalDiv = document.getElementById('myModal');
//     if(modalDiv != null) {
//       modalDiv.style.display = 'none';
      
//     } 
//   }

  
// }


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,FavComponent,DrawComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pet-photos';
}
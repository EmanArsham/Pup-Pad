import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { FavComponent } from '../fav/fav.component';
import { DogService } from '../fav-dog.service';
import{Dog} from '../dog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'pet-photos';
  pets: Dog[] = [];
  favoriteDogs: Dog[] = [];

  constructor(private http: HttpClient, private dogService: DogService) { }

  private apiKey = 'live_6pAT89wmaNau4RpJCurGSRUsm3NPfkO92y2pq4ybYV7vWaGXx1bF4fJjJjajnnDq';

  fetchDogs(): void {
    this.http.get<Dog[]>(`https://api.thedogapi.com/v1/images/search?api_key=${this.apiKey}&size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=15`)
      .subscribe(data => data.forEach(pet => this.pets.push(pet)));
  }

  ngOnInit(): void {
    this.fetchDogs();
  }

  loadMore(): void {
    this.http.get<Dog[]>(`https://api.thedogapi.com/v1/images/search?api_key=${this.apiKey}&size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10`)
      .subscribe(data => {
        this.pets = [...this.pets, ...data];
      });
  }

  openModal(src: string): void {
    const modalDiv = document.getElementById('myModal');
    const modalImg = document.getElementById('modalImage') as HTMLImageElement;
    if (modalDiv != null) {
      modalDiv.style.display = 'flex';
      modalImg.src = src;
    }
  }

  closeModal(): void {
    const modalDiv = document.getElementById('myModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'none';
    }
  }

  toggleFavorite(pet: Dog): void {
    pet.isFavorite = !pet.isFavorite;
    this.dogService.toggleFavorite(pet); // Utilize the service function directly
    this.favoriteDogs = this.dogService.getFavoriteDogs(); // Update favorite dogs list
  }

}
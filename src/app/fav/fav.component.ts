import { Component, OnInit } from '@angular/core';
import { DogService } from '../fav-dog.service';
import { Dog } from '../dog';

@Component({
  selector: 'app-fav',
  standalone: true,
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
  favoriteDogs: Dog[] = [];
 

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    this.dogService.favoriteDogs$.subscribe(dogs => {
      this.favoriteDogs = dogs;
    });
  }

  toggleFavorite(pet: Dog): void {
    this.dogService.toggleFavorite(pet); // Call the service function directly
  }

  
}



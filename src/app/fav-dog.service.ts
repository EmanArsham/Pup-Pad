import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Dog } from './dog';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private favoriteDogsSubject = new BehaviorSubject<Dog[]>(this.loadFavoriteDogs());
  favoriteDogs$ = this.favoriteDogsSubject.asObservable();

  private favoriteDogs: Dog[] = this.loadFavoriteDogs();

  constructor() { }

  addFavorite(dog: Dog): void {
    this.favoriteDogs.push(dog);
    this.favoriteDogsSubject.next(this.favoriteDogs);
    this.saveFavoriteDogs();
  }

  removeFavorite(dog: Dog): void {
    this.favoriteDogs = this.favoriteDogs.filter(d => d !== dog);
    this.favoriteDogsSubject.next(this.favoriteDogs);
    this.saveFavoriteDogs();
  }

  toggleFavorite(dog: Dog): void {
    if (this.favoriteDogs.includes(dog)) {
      this.removeFavorite(dog);
    } else {
      this.addFavorite(dog);
    }
  }

  getFavoriteDogs(): Dog[] {
    return this.favoriteDogs;
  }

  private loadFavoriteDogs(): Dog[] {
    const savedDogs = localStorage.getItem('favoriteDogs');
    return savedDogs ? JSON.parse(savedDogs) : [];
  }

  private saveFavoriteDogs(): void {
    localStorage.setItem('favoriteDogs', JSON.stringify(this.favoriteDogs));
  }
}

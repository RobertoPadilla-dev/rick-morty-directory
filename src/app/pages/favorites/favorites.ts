import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './favorites.html',
  styleUrls: ['./favorites.css']
})
export class FavoritesComponent implements OnInit {

  favorites: any[] = [];

  ngOnInit() {
    this.loadFavorites();
  }

  loadFavorites() {
    const data = localStorage.getItem('favorites');
    this.favorites = data ? JSON.parse(data) : [];
  }

  removeFavorite(id: number) {
    this.favorites = this.favorites.filter(f => f.id !== id);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}

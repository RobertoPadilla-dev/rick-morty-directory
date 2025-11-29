import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private key = 'favorites';

  getFavorites() {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }

  toggleFavorite(character: any) {
    const favs = this.getFavorites();
    const exists = favs.find((c: any) => c.id === character.id);

    const updated = exists
      ? favs.filter((c: any) => c.id !== character.id)
      : [...favs, character];

    localStorage.setItem(this.key, JSON.stringify(updated));
  }

  isFavorite(id: number): boolean {
    return this.getFavorites().some((c: any) => c.id === id);
  }
}

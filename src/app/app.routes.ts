import { Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters';
import { CharacterDetailComponent } from './pages/character-detail/character-detail';
import { FavoritesComponent } from './pages/favorites/favorites';

export const routes: Routes = [
  { path: '', component: CharactersComponent },
  { path: 'character/:id', component: CharacterDetailComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: '**', redirectTo: '' }
];

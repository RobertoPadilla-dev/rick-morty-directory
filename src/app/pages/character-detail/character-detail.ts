import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.css'
})
export class CharacterDetailComponent implements OnInit {

  character: any = null;
  episodes: any[] = [];
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadCharacter(id);
    }
  }

  loadCharacter(id: string) {
    this.loading = true;

    this.http.get<any>(`https://rickandmortyapi.com/api/character/${id}`)
      .subscribe({
        next: (res: any) => {
          this.character = res;
          this.loadEpisodes(res.episode);
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: () => {
          alert('Error al cargar personaje');
          this.router.navigate(['/']);
          this.loading = false;
          this.cdr.detectChanges();
        }
      });
  }

  loadEpisodes(episodeUrls: string[]) {
    const requests = episodeUrls.map((url: string) =>
      this.http.get<any>(url).toPromise()
    );

    Promise.all(requests).then((data: any[]) => {
      this.episodes = data;
      this.cdr.detectChanges();
    });
  }

  toggleFavorite() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const exists = favorites.find((f: any) => f.id === this.character.id);

    if (exists) {
      const updated = favorites.filter((f: any) => f.id !== this.character.id);
      localStorage.setItem('favorites', JSON.stringify(updated));
    } else {
      favorites.push(this.character);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    this.cdr.detectChanges();
  }

  isFavorite(): boolean {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.some((f: any) => f.id === this.character.id);
  }
}

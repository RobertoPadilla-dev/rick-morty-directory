import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './characters.html',
  styleUrl: './characters.css'
})
export class CharactersComponent implements OnInit {

  characters: any[] = [];
  loading = true;
  error = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('CharactersComponent iniciado');
    this.loadCharacters();
  }

  loadCharacters() {
    console.log('Llamando a la API...');
    this.loading = true;

    this.http.get('https://rickandmortyapi.com/api/character')
      .subscribe({
        next: (res: any) => {
          console.log('Respuesta API:', res);

          this.characters = res.results;
          this.loading = false;

          // ✅ ESTA LÍNEA ES LA CLAVE
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Error API:', err);
          this.error = true;
          this.loading = false;
          this.cdr.detectChanges();
        }
      });
  }

  goToDetail(id: number) {
    this.router.navigate(['/character', id]);
  }
}

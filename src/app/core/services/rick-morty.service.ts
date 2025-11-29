import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  private baseUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getCharacters(page = 1, name = '', status = '') {
    return this.http.get<any>(
      `${this.baseUrl}/character?page=${page}&name=${name}&status=${status}`
    );
  }

  getCharacterById(id: number) {
    return this.http.get<any>(`${this.baseUrl}/character/${id}`);
  }

  getEpisodeByUrl(url: string) {
    return this.http.get<any>(url);
  }
}

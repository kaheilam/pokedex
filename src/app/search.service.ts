import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs';
import { env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  baseURL = `${env.apiURL}/pokemon`;
  constructor(private httpClient: HttpClient) {}

  getPokemonData(pokemonName: string) {
    const fullUrl = `${this.baseURL}/${pokemonName.toLowerCase()}`;
    console.log(fullUrl);
    return this.httpClient.get(fullUrl).pipe(
      tap((res) => console.log(res)),
      map((response) => {
        return response;
      })
    );
  }
}

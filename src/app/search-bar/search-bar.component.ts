import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  pokemonName: string = '';
  isSubmited: boolean = false;

  constructor(private _searchService: SearchService, private _router: Router) {}

  onSubmit() {
    if (this.pokemonName.trim() !== '') {
      this._searchService.getPokemonData(this.pokemonName).subscribe(
        (result) => {
          this._router.navigate(['/pokemonDetails'], {
            state: { pokemon: result },
          });
        },
        (error) => {
          console.log(`Error while fetching Pokemon details: `, error);
        }
      );
    }
  }
}

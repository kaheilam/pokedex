import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: any;
  constructor(private _router: Router, private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.pokemon = history.state.pokemon;
  }
  calculateWidth(width: any) {
    return (width / 255) * 100;
  }

  Back() {
    this._router.navigate(['']);
  }
}

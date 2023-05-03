import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Pokedex } from '../pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {
  pokemon: any = {} as Pokemon;

  constructor(private service: Pokedex) { }

  ngOnInit(): void {
    this.loadPokemon();
  }

  loadPokemon() {
    this.service.getPokemonByID().subscribe(
      {
        next: data => {
          this.pokemon = data;
          this.pokemon.img = data.sprites.other.home.front_default;
        }
      }
    );
  }

  previousPokemon() {
    this.service.idPokemon = this.pokemon.id;
    this.service.idPokemon = this.service.idPokemon - 1;
    this.service.getPokemonByID().subscribe(
      {
        next: data => {
          this.pokemon = data;
          this.pokemon.img = data.sprites.other.home.front_default;
        }
      }
    );
  }

  nextPokemon() {
    this.service.idPokemon = this.pokemon.id;
    this.service.idPokemon = this.service.idPokemon + 1;
    this.service.getPokemonByID().subscribe(
      {
        next: data => {
          this.pokemon = data;
          this.pokemon.img = data.sprites.other.home.front_default;
        }
      }
    );
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Pokedex {
  url : string = "https://pokeapi.co/api/v2/pokemon/"
  public idPokemon : number = 1;
  public nomePokemon : string = "";
  
  constructor(private http:HttpClient) {}

  getPokemonByID() : Observable<any>{
      return this.http.get<any>(this.url+this.idPokemon)
  }
  getPokemon() : Observable<any>{
    return this.http.get<any>(this.url+this.nomePokemon)
}
}

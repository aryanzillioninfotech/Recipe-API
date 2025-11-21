import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private spoonacularKey = 'e1dc21e4365c4501bd732a7b3a6baf87';
  private spoonacularBase = 'https://api.spoonacular.com/recipes';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    const url = `${this.spoonacularBase}/complexSearch?query=&number=20&apiKey=${this.spoonacularKey}&addRecipeInformation=true`;
    return this.http.get<any>(url).pipe(map(res => res.results));
  }

  getRecipeById(id: number): Observable<Recipe> {
    const url = `${this.spoonacularBase}/${id}/information?apiKey=${this.spoonacularKey}`;
    return this.http.get<any>(url).pipe(map(res => res));
  }

  // FAVORITES CRUD
  getFavorites(): Recipe[] {
    const raw = localStorage.getItem('favorites');
    return raw ? JSON.parse(raw) : [];
  }

  addFavorite(recipe: Recipe) {
    const fav = this.getFavorites();
    if (!fav.find(f => f.id === recipe.id)) {
      fav.push(recipe);
      localStorage.setItem('favorites', JSON.stringify(fav));
    }
  }

  removeFavorite(id: number) {
    const fav = this.getFavorites().filter(r => r.id !== id);
    localStorage.setItem('favorites', JSON.stringify(fav));
  }

  isFavorite(id: number): boolean {
    return !!this.getFavorites().find(r => r.id === id);
  }
}

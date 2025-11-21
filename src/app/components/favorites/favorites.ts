import { Component } from '@angular/core';
// import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.html'
})
export class FavoritesComponent {

  favorites: Recipe[] = [];

  constructor(private service: RecipeService) {}

  ngOnInit() {
    this.favorites = this.service.getFavorites();
  }

  remove(id: number) {
    this.service.removeFavorite(id);
    this.favorites = this.service.getFavorites();
  }
}

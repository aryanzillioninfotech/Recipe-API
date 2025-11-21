import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe';
import { RouterLink } from "@angular/router";
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {
    this.fetchRecipes();
  }

  fetchRecipes() {
    this.recipeService.getRecipes().subscribe({
      next: (res:any) => {
        console.log("API Full Response:", res);
        this.recipes = res;  // res is already an array
      },
      error: (err:any) => console.error(err)
    });
  }
}

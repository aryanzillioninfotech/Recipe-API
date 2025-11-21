import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
// import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [],
  templateUrl: './recipe-details.html',
  styleUrls: ['./recipe-details.css']
})
export class RecipeDetailsComponent {

  private route = inject(ActivatedRoute);
  private recipeService = inject(RecipeService);

  recipe!: Recipe;
  loading = false;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loading = true;

    this.recipeService.getRecipeById(id).subscribe({
      next: res => { this.recipe = res; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  addFavorite() {
    this.recipeService.addFavorite(this.recipe);
    alert("Added to favorites ❤️");
  }
}

import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details';
import { FavoritesComponent } from './components/favorites/favorites';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipe/:id', component: RecipeDetailsComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: '**', redirectTo: '' }
];

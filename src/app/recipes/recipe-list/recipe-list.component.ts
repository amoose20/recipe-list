import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a test', 'https://www.rubiconline.com/wp-content/uploads/2022/11/px650820-image-kwvv9jjg.jpg')
    ];

}

import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a test', 'https://www.rubiconline.com/wp-content/uploads/2022/11/px650820-image-kwvv9jjg.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}
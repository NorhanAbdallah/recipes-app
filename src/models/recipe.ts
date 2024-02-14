export interface Recipe {
    id: number;
    image: string;
    imageType: string;
    title: string;
}

type recipeStep = {
    number: number;
    step: string;
};
type recipeInstructions = {
    name: string;
    steps: Array<recipeStep>;
};

type recipeIngredient = { id: number; amount: number; originalName: string };

export interface RecipeDetails {
    preparationMinutes?: number;
    cookingMinutes?: number;
    pricePerServing?: number;
    id?: number;
    title?: string;
    readyInMinutes?: number;
    servings?: number;
    image?: string;
    dishTypes?: Array<string>;
    analyzedInstructions?: Array<recipeInstructions>;
    extendedIngredients: Array<recipeIngredient>;
}

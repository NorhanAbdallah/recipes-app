import API from '../adapter';
import { AxiosResponse } from '../models/api-respones';
import { Recipe } from '../models/recipe';

export async function searchRecipes(
    searchTerm?: string
): Promise<AxiosResponse<Array<Recipe>>> {
    const searchQuery = searchTerm ? searchTerm : '';
    const url = `/recipes/complexSearch?apiKey=2954d77a4ca0496491fb461d22e610aa&query=${searchQuery}`;
    return API.get(url).then(response => response.data);
}

export async function getRecipeDetails(
    id?: string
): Promise<AxiosResponse<Array<Recipe>>> {
    const url = `/recipes/${id}/information?apiKey=2954d77a4ca0496491fb461d22e610aa`;
    return API.get(url).then(response => response.data);
}

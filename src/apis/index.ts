import API from '../adapter';
import { AxiosResponse } from '../models/api-respones';

export async function searchRecipes(
    searchTerm?: string
): Promise<AxiosResponse<[]>> {
    const searchQuery = searchTerm ? searchTerm : '';
    const url = `/recipes/complexSearch?apiKey=126da5629f364a3d987e00e6aa57c928&query=${searchQuery}`;
    return API.get(url).then(response => response.data);
}

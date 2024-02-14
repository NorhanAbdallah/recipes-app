import Box from '@mui/material/Box';
import React, { useState, useEffect, useCallback } from 'react';
import useDebounce from '../../../shared/hooks/useDebounce';
import { searchRecipes } from '../../../apis/recipes';
import {
    listWrapperStyles,
    progressStyles,
    contentWrapperStyles,
    recipeImgStyles,
    cardStyles,
    cardContentStyles,
} from './styles';
import { Recipe } from '../../../models/recipe';
import Card from '../../../shared/components/card';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';

interface ListProps {
    searchTerm?: string;
}

const RecipesList: React.FC<ListProps> = ({ searchTerm }) => {
    const [recipes, setRecipes] = useState<Array<Recipe>>([]);
    const [loadingError, setLoadingError] = useState();
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const fetchRecipes = useCallback(() => {
        setLoading(true);
        searchRecipes(debouncedSearchTerm)
            .then(respnose => setRecipes(respnose.results))
            .catch(error => setLoadingError(error))
            .finally(() => {
                setLoading(false);
            });
    }, [debouncedSearchTerm]);

    useEffect(() => {
        if (debouncedSearchTerm) fetchRecipes();
    }, [debouncedSearchTerm]);

    if (loading) {
        return (
            <Box sx={contentWrapperStyles}>
                <CircularProgress sx={progressStyles} />
            </Box>
        );
    } else if (loadingError) {
        return <Box sx={contentWrapperStyles}>Something went wrong!.</Box>;
    } else if (recipes.length === 0) {
        return <Box sx={contentWrapperStyles}>Where's your recipe!.</Box>;
    } else {
        return (
            <Box sx={listWrapperStyles}>
                {recipes.map(recipe => (
                    <Card
                        imgUrl={recipe.image}
                        imgTitle={recipe.title}
                        key={recipe.id}
                        styles={{
                            imgStyles: recipeImgStyles,
                            cardStyles,
                            cardContentStyles,
                        }}
                        hanldeClick={() => navigate(`/${recipe.id}`)}
                    />
                ))}
            </Box>
        );
    }
};

export default RecipesList;

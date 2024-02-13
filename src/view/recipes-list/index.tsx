import Box from '@mui/material/Box';
import React, { useState, useEffect, useCallback } from 'react';
import useDebounce from '../../shared/hooks/useDebounce';
import { searchRecipes } from '../../apis';

interface ListProps {
    searchTerm?: string;
}

const RecipesList: React.FC<ListProps> = ({ searchTerm }) => {
    const [recipes, setRecipes] = useState([]);
    const [loadingError, setLoadingError] = useState();
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const [loading, setLoading] = useState(false);

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

    return <Box>List</Box>;
};

export default RecipesList;

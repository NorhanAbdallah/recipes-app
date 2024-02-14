import Box from '@mui/material/Box';
import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeDetails } from '../../../apis';

interface ProfileProps {
    searchTerm?: string;
}

const RecipeProfile: React.FC<ProfileProps> = ({ searchTerm }) => {
    const { recipeId } = useParams();

    const handleGetRecipeDetails = useCallback(() => {
        if (!recipeId) {
            return;
        }
        getRecipeDetails(recipeId).then(console.log);
    }, [recipeId]);

    useEffect(() => {
        handleGetRecipeDetails();
    }, []);

    return <Box>Profile</Box>;
};

export default RecipeProfile;

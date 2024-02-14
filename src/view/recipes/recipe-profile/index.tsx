import Box from '@mui/material/Box';
import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeDetails } from '../../../apis';
import {
    contentWrapperStyles,
    sectionWrapperStyles,
    profileWrapperStyles,
    listItemStyles,
    recipeInfoSectionStyles,
} from './styles';
import { RecipeDetails } from '../../../models/recipe';
import { Typography } from '@mui/material';
import CookingInfoItem from './components/cooking-info-item';
import BasicChips from '../../../shared/components/chip';

const RecipeProfile = () => {
    const { recipeId } = useParams();
    const [recipeDetails, setRecipeDetails] = useState<RecipeDetails>();

    const handleGetRecipeDetails = useCallback(() => {
        if (!recipeId) {
            return;
        }
        getRecipeDetails(recipeId).then(recipe => setRecipeDetails(recipe));
    }, [recipeId]);

    useEffect(() => {
        handleGetRecipeDetails();
    }, []);

    return (
        <Box sx={contentWrapperStyles}>
            <Box sx={profileWrapperStyles}>
                {!recipeDetails ? (
                    <Box>We're working on getting your recipe!.</Box>
                ) : (
                    <React.Fragment>
                        {' '}
                        <Box>
                            <Typography variant="h3">
                                {recipeDetails.title}
                            </Typography>
                            <Box sx={sectionWrapperStyles}>
                                <CookingInfoItem
                                    time={`${recipeDetails.cookingMinutes} min`}
                                    title={'cook'}
                                    bordered
                                />
                                <CookingInfoItem
                                    time={`${recipeDetails.preparationMinutes} min`}
                                    title={'prep'}
                                    bordered
                                />

                                <CookingInfoItem
                                    time={`${recipeDetails.readyInMinutes} min`}
                                    title={'ready'}
                                    bordered
                                />
                                <CookingInfoItem
                                    time={`${recipeDetails.servings}`}
                                    title={'servings'}
                                />
                            </Box>
                            <Box sx={sectionWrapperStyles}>
                                {recipeDetails?.dishTypes?.map(type => (
                                    <BasicChips label={type} />
                                ))}
                            </Box>
                            <img src={recipeDetails?.image} />
                        </Box>
                        <Box sx={recipeInfoSectionStyles}>
                            <Box>
                                <Typography variant="h6">
                                    Ingredients
                                </Typography>
                                <ol>
                                    {recipeDetails.extendedIngredients?.map(
                                        ingredient => {
                                            return (
                                                <li
                                                    style={listItemStyles}
                                                    key={ingredient?.id}
                                                >
                                                    {ingredient?.amount}{' '}
                                                    {ingredient.originalName}
                                                </li>
                                            );
                                        }
                                    )}
                                </ol>
                            </Box>

                            <Box>
                                <Typography variant="h6">Steps</Typography>
                                <ol>
                                    {recipeDetails.analyzedInstructions?.map(
                                        instructions =>
                                            instructions?.steps?.map(step => {
                                                return (
                                                    <li
                                                        style={listItemStyles}
                                                        key={step?.number}
                                                    >
                                                        {step?.step}
                                                    </li>
                                                );
                                            })
                                    )}
                                </ol>
                            </Box>
                        </Box>
                    </React.Fragment>
                )}
            </Box>
        </Box>
    );
};

export default RecipeProfile;

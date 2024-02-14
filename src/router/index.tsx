import React from 'react';

import { Box } from '@mui/material';
import { RouteObject, useRoutes } from 'react-router';

import { Paths } from './paths';
import Landing from '../view';
import RecipeProfile from '../view/recipes/recipe-profile';

export default function Routes() {
    const routes: RouteObject[] = [
        {
            path: Paths.HOME,
            element: <Landing />,
        },
        { path: Paths.PROFILE, element: <RecipeProfile /> },
    ];

    const pages = useRoutes(routes);

    return <Box>{pages}</Box>;
}

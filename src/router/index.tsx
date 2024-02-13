import React from 'react';

import { RouteObject, useRoutes } from 'react-router';
import { Paths } from './paths';
import Landing from '../view';
import { Box } from '@mui/material';

export default function Routes() {
    const routes: RouteObject[] = [
        {
            path: Paths.HOME,
            element: <Landing />,
        },
    ];
    const pages = useRoutes(routes);
    return <Box>{pages}</Box>;
}
import React, { useState } from 'react';
import Input from '../shared/components/input-field';
import RecipesList from './recipes-list';
import Box from '@mui/material/Box';
import {
    headerImgStyles,
    headerTitleStyle,
    contentWrapperStyles,
} from './styles';
import { Typography } from '@mui/material';

export default function Landing() {
    const [searchValue, setSearchValue] = useState('');

    return (
        <React.Fragment>
            <Box sx={headerImgStyles}>
                <Box sx={contentWrapperStyles}>
                    <Typography variant="h2" sx={headerTitleStyle}>
                        What recipe are you looking for today?
                    </Typography>
                    <Input
                        handleChange={setSearchValue}
                        value={searchValue}
                        placeholder="Search recipe"
                        type="search"
                    />
                </Box>
            </Box>

            <RecipesList searchTerm={searchValue} />
        </React.Fragment>
    );
}

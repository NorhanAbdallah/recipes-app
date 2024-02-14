import Box from '@mui/material/Box';
import React from 'react';

import { Typography } from '@mui/material';
import { infoWrapperStyles, timeStyles, borderStyles } from './styles';

interface CookingInfoItemProps {
    time: string;
    title: string;
    bordered?: boolean;
}

const CookingInfoItem: React.FC<CookingInfoItemProps> = ({
    time,
    title,
    bordered = false,
}) => {
    return (
        <Box
            style={
                bordered
                    ? { ...infoWrapperStyles, ...borderStyles }
                    : { ...infoWrapperStyles }
            }
        >
            <Typography sx={timeStyles}>{time}</Typography>
            <Typography>{title}</Typography>
        </Box>
    );
};

export default CookingInfoItem;

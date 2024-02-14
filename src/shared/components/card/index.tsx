import * as React from 'react';
import { Card as MuiCard, SxProps } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface CardProps {
    imgUrl: string;
    imgTitle: string;
    imgHeight?: string;
    styles?: {
        imgStyles?: SxProps;
        cardStyles?: SxProps;
        cardContentStyles?: SxProps;
    };
    hanldeClick?: () => void;
}

const Card: React.FC<CardProps> = ({
    imgUrl,
    imgTitle,
    imgHeight = '100%',
    styles,
    hanldeClick,
}) => {
    return (
        <MuiCard sx={styles?.cardStyles} onClick={hanldeClick}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height={imgHeight}
                    image={imgUrl}
                    alt={imgTitle}
                    sx={styles?.imgStyles}
                />
                <CardContent sx={styles?.cardContentStyles}>
                    <Typography gutterBottom variant="h5" component="div">
                        {imgTitle}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </MuiCard>
    );
};

export default Card;

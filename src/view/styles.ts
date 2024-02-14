import { SxProps } from '@mui/material';
import img from '../shared/assets/crop-plate-with-salad.jpg';

export const headerImgStyles: SxProps = {
    backgroundImage: `url(${img})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    height: '50vh',
    display: 'flex',
    alignItems: 'center',
};

export const headerTitleStyle: SxProps = {
    color: '#ebebeb',
    maxWidth: '50rem',
};

export const contentWrapperStyles: SxProps = {
    marginLeft: '5rem',
};

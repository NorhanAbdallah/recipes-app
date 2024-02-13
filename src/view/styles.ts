import { SxProps } from '@mui/material';
import img from '../assets/images/crop-plate-with-salad.jpg';

export const headerImgStyles: SxProps = {
    backgroundImage: `url(${img})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    height: '70vh',
    display: 'flex',
    alignItems: 'center',
    borderBottomLeftRadius: '2rem',
    borderBottomRightRadius: '2rem',
};

export const headerTitleStyle: SxProps = {
    color: '#ebebeb',
    maxWidth: '50rem',
};

export const contentWrapperStyles: SxProps = {
    marginLeft: '5rem',
};

import { SxProps } from '@mui/material';

export const listWrapperStyles: SxProps = {
    background: '#353334',
    position: 'absolute',
    top: '47vh',
    width: '100%',
    borderTopLeftRadius: '2rem',
    borderTopRightRadius: '2rem',
    padding: '5rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 26%)',
    justifyContent: 'space-around',
    rowGap: '5rem',
};

export const recipeImgStyles: SxProps = {
    width: '100%',
};

export const contentWrapperStyles: SxProps = {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    alignItems: 'center',
    top: '47vh',
    background: '#353334',
    width: '100%',
    height: '-webkit-fill-available',
    borderTopLeftRadius: '2rem',
    borderTopRightRadius: '2rem',
};

export const progressStyles: SxProps = {
    color: '#ebebeb',
};

export const cardStyles: SxProps = {
    borderTopLeftRadius: '44px',
    borderTopRightRadius: '44px',
    background: '#353334',
};

export const cardContentStyles: SxProps = {
    background: '#353334',
    color: '#ebebeb',
};

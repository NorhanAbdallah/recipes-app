import { SxProps } from '@mui/material';

export const textFieldStyles: SxProps = {
    backgroundColor: '#716a6a5c',
    marginTop: '2rem',
    borderRadius: '30px',
    width: '30rem',
    height: '2.5rem',
    '& fieldset': { border: 'none' },
    '&::after': {
        borderBottom: 'none',
        transition: 'none',
        transform: 'none',
        content: 'none',
    },
    '&::before': {
        borderBottom: 'none',
        transition: 'none',
        transform: 'none',
        content: 'none',
    },
    input: {
        color: '#ebebeb',
        paddingLeft: '0.5rem',
    },
};

export const searchIconStyles: SxProps = {
    marginLeft: '0.5rem',
    color: '#b7b7b770',
    width: '20px',
    height: '20px',
};

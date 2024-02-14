import { SxProps } from '@mui/material';

export const profileWrapperStyles: SxProps = {
    backgroundColor: '#18171a',
    width: '90%',
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    paddingY: '3rem',
    minHeight: '100vh',
};

export const contentWrapperStyles: SxProps = {
    display: 'flex',
    justifyContent: 'center',
};

export const sectionWrapperStyles: SxProps = {
    display: 'flex',
    marginBottom: '1rem',
};

export const listItemStyles: React.CSSProperties = {
    maxWidth: '40rem',
    wordBreak: 'break-word',
    marginBottom: '0.5rem',
};

export const recipeInfoSectionStyles: SxProps = {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
    marginTop: '3rem',
};

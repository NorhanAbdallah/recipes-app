import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { chipStyles } from './styles';

interface ChipProps {
    label: string;
    variant?: 'filled' | 'outlined';
}

export default function BasicChips({ label, variant = 'outlined' }: ChipProps) {
    return <Chip label={label} variant={variant} sx={chipStyles} />;
}

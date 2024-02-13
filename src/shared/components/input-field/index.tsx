import * as React from 'react';
import { Input as MuiInput, InputProps } from '@mui/material';
import { textFieldStyles, searchIconStyles } from './styles';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
interface InputFieldProps extends InputProps {
    value?: string;
    defaultValue?: string;
    handleChange: (value: string) => void;
    placeholder?: string;
    type?: 'search';
}

const Input: React.FC<InputFieldProps> = ({
    value,
    placeholder,
    defaultValue,
    handleChange,
    type,
    ...props
}) => {
    return (
        <MuiInput
            placeholder={placeholder}
            defaultValue={defaultValue}
            value={value}
            onChange={event => handleChange(event.target.value)}
            sx={textFieldStyles}
            startAdornment={
                type === 'search' && (
                    <SearchOutlinedIcon sx={searchIconStyles} />
                )
            }
            {...props}
        />
    );
};

export default Input;

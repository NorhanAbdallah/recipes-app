import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import InputField from './index';

describe('InputField component', () => {
    it('Should render placeholder', () => {
        render(<InputField placeholder="user name" handleChange={() => {}} />);
        expect(screen.getByPlaceholderText('user name')).toBeDefined();
    });

    it('Should render text input and value.', () => {
        render(
            <InputField
                placeholder="user name"
                handleChange={() => {}}
                name="inputField"
            />
        );
        const field = screen.getByRole('textbox');

        fireEvent.change(field, { target: { value: 'a' } });

        fireEvent.change(field, { target: { value: 'Good Morning!!' } });
        expect((field as any).value).toBe('Good Morning!!');
    });
});

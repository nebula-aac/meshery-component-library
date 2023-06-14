import { type ButtonProps as MuiButtonProps } from '@mui/material';
import React from 'react';
type ButtonBaseProps = Pick<MuiButtonProps, 'variant' | 'size' | 'color'>;
type VariantType = {
    variant?: 'text' | 'outlined' | 'contained';
};
type ColorType = {
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
};
export type ButtonProps = {
    variant?: VariantType;
    color?: ColorType;
    fullWidth?: boolean;
    disabledElevation?: boolean;
    disableFocusRipple?: boolean;
    href?: string;
    children?: string;
} & ButtonBaseProps;
export declare const Button: ({ variant, children, ...props }: ButtonProps) => React.JSX.Element;
export default Button;

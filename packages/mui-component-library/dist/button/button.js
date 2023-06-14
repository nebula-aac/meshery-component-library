import { _ as _extends } from "@swc/helpers/_/_extends";
import { _ as _object_without_properties_loose } from "@swc/helpers/_/_object_without_properties_loose";
import { jsx as _jsx } from "react/jsx-runtime";
import { Button as MuiButton } from '@mui/material';
import React from 'react';
export const Button = (_param)=>/*#__PURE__*/ {
    var { variant = 'outlined', children = 'Button' } = _param, props = _object_without_properties_loose(_param, [
        "variant",
        "children"
    ]);
    return _jsx(MuiButton, _extends({
        variant: variant
    }, props, {
        children: children
    }));
};
export default Button;

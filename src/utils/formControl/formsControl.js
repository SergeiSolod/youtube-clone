import React from "react";
import TextField from '@material-ui/core/TextField'

export const Input = ({
                          label,
                          input,
                          meta: {touched, invalid, error},
                          ...custom
                      }) => {
    return (
        <TextField
            id="outlined-basic"
            variant="outlined"
            label={label}
            placeholder={label}
            error={touched && invalid}
            helperText={touched && error}
            {...input}
            {...custom}
        />
    );
};

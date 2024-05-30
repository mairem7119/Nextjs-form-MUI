import React from "react";
import { TextField, InputLabel, FormControl } from "@mui/material";
interface InputFieldProps {
  lableText: string;
  placeHolder: string;
}

export default function InputField({ lableText, placeHolder }: InputFieldProps) {
  return (
    <div>
      <FormControl variant="standard">
        <InputLabel
          shrink
          htmlFor="bootstrap-input"
          sx={{ fontWeight: "bold" }}
        >
          {lableText}
        </InputLabel>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          margin="normal"
          placeholder={placeHolder}
          
        />
      </FormControl>
    </div>
  );
}

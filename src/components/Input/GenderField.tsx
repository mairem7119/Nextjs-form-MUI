import React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { TextField, InputLabel, FormControl, Select } from "@mui/material";

export default function GenderField() {
  return (
    <div>
      <FormControl variant="standard">
        <InputLabel
          shrink
          htmlFor="bootstrap-input"
          sx={{ fontWeight: "bold" }}
        >
          性別
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          sx={{
            border: "1px solid #ced4da",
            borderRadius: "3px",
            width: "210px",
            height: "40px",
            marginBottom: "8px",
            padding:"5px",
            backgroundColor: "#FFFFFF" 
          }}
          defaultValue="女性"
        >
          <MenuItem value={1}>男性</MenuItem>
          <MenuItem value={2}>女性</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

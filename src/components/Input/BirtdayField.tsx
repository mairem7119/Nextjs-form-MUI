import React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { TextField, InputLabel, FormControl, Select } from "@mui/material";

export default function BirtdayField() {
  return (
    <div>
      <Box>
        <InputLabel
          shrink
          htmlFor="bootstrap-input"
          sx={{ fontWeight: "bold" }}
        >
          生年月日
        </InputLabel>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue="1999"
              sx={{ width: "120px" }}
              size="small"
            >
              <MenuItem>1999</MenuItem>
              <MenuItem>2000</MenuItem>
              <MenuItem>2001</MenuItem>
            </Select>
            <InputLabel
              shrink
              htmlFor="bootstrap-input"
              sx={{
                fontWeight: "bold",
                display: "inline",
                marginLeft: "10px",
                paddingTop: "20px",
              }}
            >
              年
            </InputLabel>
          </Box>
          <Box sx={{ display: "inline", marginLeft: "10px" }}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue="1999"
              sx={{ width: "80px" }}
              size="small"
            >
              <MenuItem>1</MenuItem>
              <MenuItem>2</MenuItem>
              <MenuItem>3</MenuItem>
            </Select>
            <InputLabel
              shrink
              htmlFor="bootstrap-input"
              sx={{
                fontWeight: "bold",
                display: "inline",
                marginLeft: "10px",
                paddingTop: "20px",
                fontSize: "12px",
              }}
            >
              月
            </InputLabel>
          </Box>
          <Box sx={{ display: "inline", marginLeft: "10px" }}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue="1999"
              sx={{ width: "80px" }}
              size="small"
            >
              <MenuItem>13</MenuItem>
              <MenuItem>14</MenuItem>
              <MenuItem>15</MenuItem>
            </Select>
            <InputLabel
              shrink
              htmlFor="bootstrap-input"
              sx={{
                fontWeight: "bold",
                display: "inline",
                marginLeft: "10px",
                paddingTop: "20px",
                fontSize: "12px",
              }}
            >
              日
            </InputLabel>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

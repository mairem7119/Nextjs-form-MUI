import React from 'react';
import { Select, MenuItem, Chip, InputLabel, FormControl } from '@mui/material';

function TagSelect() {
  const [selectedTags, setSelectedTags] = React.useState([]);

  const handleChange = (event: any) => {
    setSelectedTags(event.target.value);
  };

  const handleDelete = (tagToDelete: any) => () => {
    setSelectedTags((tags) => tags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-mutiple-chip-label">Tag</InputLabel>
      <Select
        labelId="demo-mutiple-chip-label"
        multiple
        value={selectedTags}
        onChange={handleChange}
        renderValue={(selected) => (
          <div>
            {selected.map((value) => (
              <Chip key={value} label={value} onDelete={handleDelete(value)} />
            ))}
          </div>
        )}
      >
        {['dịch vụ', 'tiện ích'].map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default TagSelect;
import React from 'react';
import { Select, MenuItem, Chip, InputLabel, FormControl } from '@mui/material';

export default function TagSelect() {
  const [selectedTags, setSelectedTags] = React.useState([]);

  const handleChange = (event: any) => {
    setSelectedTags(event.target.value);
  };

  const handleDelete = (tagToDelete: any) => () => {
    setSelectedTags((tags) => tags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <FormControl fullWidth>
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
        {['Akajoy', 'fit365'].map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

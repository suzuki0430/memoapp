import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

export const MemoItem = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div style={{ marginBottom: 50 }}>
        <Input
          id="standard-multiline-flexible"
          fullWidth
          placeholder="Titleを入力してください"
          value={value}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          id="standard-multiline-static"
          multiline
          fullWidth
          rows="10"
          placeholder="Contentを入力してください"
        />
      </div>
    </div>
  );
};

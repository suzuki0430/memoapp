import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';

export const MemoItem = () => {
  const theme = createTheme({
    palette: {
      primary: green,
    },
  });

  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div style={{ marginBottom: 50 }}>
        <Input
          id="memo-title"
          type="text"
          fullWidth
          placeholder="Titleを入力してください"
          value={value}
          onChange={handleChange}
        />
      </div>
      <div style={{ marginBottom: 20 }}>
        <TextField
          id="memo-content"
          multiline
          fullWidth
          rows="10"
          placeholder="Contentを入力してください"
        />
      </div>
      <div>
        <ThemeProvider theme={theme}>
          <Button id="save-memo" variant="contained" color="primary">
            Save
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
};

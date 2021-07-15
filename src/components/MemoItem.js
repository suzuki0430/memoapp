import React, { useContext, useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';

import { MemoContext } from '../providers/memoProvider';

export const MemoItem = () => {
  const theme = createTheme({
    palette: {
      primary: green,
    },
  });

  const [value, setValue] = useState('');

  const [disabled, setDisabled] = useState(true);

  const { memoTitle, memoContent } = useContext(MemoContext);

  useEffect(() => {
    if (memoTitle === '' || memoContent === '') return;
    setDisabled(false);
  }, [memoTitle, memoContent]);

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
          value={memoTitle}
          onChange={handleChange}
          disabled={disabled}
        />
      </div>
      <div style={{ marginBottom: 20 }}>
        <TextField
          id="memo-content"
          multiline
          fullWidth
          rows="10"
          placeholder="Contentを入力してください"
          value={memoContent}
          disabled={disabled}
        />
      </div>
      <div>
        <ThemeProvider theme={theme}>
          <Button
            id="save-memo"
            variant="contained"
            color="primary"
            disabled={disabled}
          >
            Save
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
};

import React, { useContext, useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';

import { MemoContext } from '../providers/memoProvider';

import informations from '../apis/informations';

export const MemoItem = () => {
  const theme = createTheme({
    palette: {
      primary: green,
    },
  });

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [disabled, setDisabled] = useState(true);

  const { memoId, memoTitle, memoContent, memoCategoryId } =
    useContext(MemoContext);

  useEffect(() => {
    if (memoTitle === '' || memoContent === '') return;

    setTitle(memoTitle);
    setContent(memoContent);
    setDisabled(false);
  }, [memoTitle, memoContent]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSave = (id, category_id, title, content) => {
    const body = {
      category_id,
      title,
      content,
    };

    let data = {
      headers: {
        'X-ACCESS-TOKEN': '0f28d368-4347-4653-b4b6-94392e644444',
        'content-type': 'application/json',
      },
    };

    informations.put(`/memo/${id}`, body, data).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <div style={{ marginBottom: 50 }}>
        <Input
          id="memo-title"
          type="text"
          fullWidth
          placeholder="Titleを入力してください"
          value={title}
          onChange={handleTitleChange}
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
          value={content}
          onChange={handleContentChange}
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
            onClick={() => handleSave(memoId, memoCategoryId, title, content)}
          >
            <span style={{ color: '#fff' }}>SAVE</span>
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
};

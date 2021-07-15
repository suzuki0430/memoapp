import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import FolderIcon from '@material-ui/icons/Folder';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';

import informations from '../apis/informations';

import { MemoContext } from '../providers/memoProvider';

export const CategoryList = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      borderRight: '1px solid rgba(0, 0, 0, 0.12)',
      borderBottom: '2px solid rgba(0, 0, 0, 0.12)',
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }));

  const theme = createTheme({
    palette: {
      primary: green,
    },
  });

  const classes = useStyles();

  const [categoryList, setCategoryList] = useState([]);
  const [memoList, setMemoList] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const [disabled, setDisabled] = useState(true);

  const { setMemoId, setMemoTitle, setMemoContent, setMemoCategoryId } =
    useContext(MemoContext);

  // フォルダをクリックしたときの処理
  const handleClick = (id) => {
    // 展開中のフォルダのメモを初期化する
    setMemoList([]);

    let data = {
      headers: {
        'X-ACCESS-TOKEN': '0f28d368-4347-4653-b4b6-94392e644444',
        'content-type': 'application/json',
      },
    };

    // 展開するフォルダのメモを取得する
    informations.get(`/memo/?category_id=${id}`, data).then((res) => {
      setMemoList(res.data);
    });

    // フォルダごとに展開・縮小を制御する
    if (selectedId === id) {
      setSelectedId('');
      setDisabled(true);
    } else {
      setSelectedId(id);
      setDisabled(false);
    }
  };

  // メモをクリックしたときの処理
  const handleMemoClick = (id) => {
    let data = {
      headers: {
        'X-ACCESS-TOKEN': '0f28d368-4347-4653-b4b6-94392e644444',
        'content-type': 'application/json',
      },
    };

    // 展開するフォルダのメモを取得する
    informations.get(`/memo/${id}`, data).then((res) => {
      setMemoId(res.data.id);
      setMemoCategoryId(res.data.category_id);
      setMemoTitle(res.data.title);
      setMemoContent(res.data.content);
    });
  };

  // NEWボタンをクリックしたときの処理
  const handleNew = (category_id) => {
    const body = {
      category_id,
      title: 'はじめの一歩ガチャ',
      content: 'ジェイソン尾妻かぶりがち',
    };

    let data = {
      headers: {
        'X-ACCESS-TOKEN': '0f28d368-4347-4653-b4b6-94392e644444',
        'content-type': 'application/json',
      },
    };

    informations.post(`/memo`, body, data).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    let data = {
      headers: {
        'X-ACCESS-TOKEN': '0f28d368-4347-4653-b4b6-94392e644444',
        'content-type': 'application/json',
      },
    };

    informations.get(`/category`, data).then((res) => {
      setCategoryList(res.data);
    });
  }, []);

  return (
    <div className={classes.root}>
      <List component="nav" aria-labelledby="nested-list-subheader">
        {categoryList.map((list, index) => {
          return (
            <React.Fragment key={list.id}>
              <ListItem
                id={`category-${list.id}`}
                button
                onClick={() => handleClick(list.id)}
              >
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText
                  id={`category-${list.id}-title`}
                  primary={list.name}
                />
                {list.id === selectedId ? <ExpandLess /> : <ExpandMore />}
              </ListItem>

              <Collapse
                in={list.id === selectedId}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {memoList.map((memo, index) => {
                    return (
                      <ListItem
                        id={`memo-${memo.id}`}
                        button
                        className={classes.nested}
                        key={index}
                        onClick={() => handleMemoClick(memo.id)}
                      >
                        <ListItemIcon>
                          <InsertDriveFileIcon />
                        </ListItemIcon>
                        <ListItemText primary={memo.title} />
                      </ListItem>
                    );
                  })}
                </List>
              </Collapse>
            </React.Fragment>
          );
        })}
      </List>
      <div
        style={{
          textAlign: 'end',
          marginTop: 10,
          marginBottom: 15,
          paddingRight: 10,
        }}
      >
        <ThemeProvider theme={theme}>
          <Button
            id="new-memo"
            variant="contained"
            color="primary"
            disabled={disabled}
            onClick={() => handleNew(selectedId)}
          >
            <span style={{ color: '#fff' }}>NEW</span>
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
};

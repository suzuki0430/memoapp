import React, { createContext, useState } from 'react';

const defaultValue = {
  memoId: null,
  setMemoId: () => {},
  memoTitle: '',
  setMemoTitle: () => {},
  memoContent: '',
  setMemoContent: () => {},
  memoCategoryId: null,
  setMemoCategoryId: () => {},
  memoList: [],
  setMemoList: () => {},
  categoryList: [],
  setCategoryList: () => {},
  accessToken: '',
  setAccessToken: () => {},
};

export const MemoContext = createContext(defaultValue);

export const MemoProvider = ({ children }) => {
  const [memoId, setMemoId] = useState(null);
  const [memoTitle, setMemoTitle] = useState('');
  const [memoContent, setMemoContent] = useState('');
  const [memoCategoryId, setMemoCategoryId] = useState(null);
  const [memoList, setMemoList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [accessToken, setAccessToken] = useState('');

  return (
    <MemoContext.Provider
      value={{
        memoId,
        setMemoId,
        memoTitle,
        setMemoTitle,
        memoContent,
        setMemoContent,
        memoCategoryId,
        setMemoCategoryId,
        memoList,
        setMemoList,
        categoryList,
        setCategoryList,
        accessToken,
        setAccessToken,
      }}
    >
      {children}
    </MemoContext.Provider>
  );
};

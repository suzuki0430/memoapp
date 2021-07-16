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
};

export const MemoContext = createContext(defaultValue);

export const MemoProvider = ({ children }) => {
  const [memoId, setMemoId] = useState(null);
  const [memoTitle, setMemoTitle] = useState('');
  const [memoContent, setMemoContent] = useState('');
  const [memoCategoryId, setMemoCategoryId] = useState(null);
  const [memoList, setMemoList] = useState([]);

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
      }}
    >
      {children}
    </MemoContext.Provider>
  );
};

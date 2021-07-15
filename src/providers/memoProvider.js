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
};

export const MemoContext = createContext(defaultValue);

export const MemoProvider = ({ children }) => {
  const [memoId, setMemoId] = useState(null);
  const [memoTitle, setMemoTitle] = useState('');
  const [memoContent, setMemoContent] = useState('');
  const [memoCategoryId, setMemoCategoryId] = useState(null);

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
      }}
    >
      {children}
    </MemoContext.Provider>
  );
};

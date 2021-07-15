import React, { createContext, useState } from 'react';

const defaultValue = {
  memoTitle: '',
  setMemoTitle: () => {},
  memoContent: '',
  setMemoContent: () => {},
};

export const MemoContext = createContext(defaultValue);

export const MemoProvider = ({ children }) => {
  const [memoTitle, setMemoTitle] = useState('');
  const [memoContent, setMemoContent] = useState('');

  return (
    <MemoContext.Provider
      value={{
        memoTitle,
        setMemoTitle,
        memoContent,
        setMemoContent,
      }}
    >
      {children}
    </MemoContext.Provider>
  );
};

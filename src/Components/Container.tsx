import React from 'react';

interface Props {
  children?: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-sky-900 to-indigo-800 shadow-3xl"
    >{children}</div>
  );
};

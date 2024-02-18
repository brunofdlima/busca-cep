import React from 'react';

interface Props {
  children?: React.ReactNode;
}

export const FormContainer = ({ children }: Props) => {
  return (
    <div className="flex flex-col absolute isolate aspect-video py-14 px-6  rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5">{children}</div>
  );
};

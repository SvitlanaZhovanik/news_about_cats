import { FC } from 'react';
import { IButtonProps } from './Button.types';

export const Button: FC<IButtonProps> = ({ children }) => {
  return (
    <button className="bg-purple hover:bg-deepPurple focus:bg-deepPurple duration-300 text-white py-2 px-4 rounded">
      {children}
    </button>
  );
};

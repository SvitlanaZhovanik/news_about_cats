import { FC } from 'react';
import { IButtonProps } from './Button.types';
import Link from 'next/link';
import clsx from 'clsx';

export const Button: FC<IButtonProps> = ({
  children,
  href,
  onClick,
  className,
}) => {
  return href ? (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        'bg-purple hover:bg-deepPurple focus:bg-deepPurple duration-300 text-white py-2 px-4 rounded',
        className,
      )}
    >
      {children}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={clsx(
        'bg-purple hover:bg-deepPurple focus:bg-deepPurple duration-300 text-white py-2 px-4 rounded',
        className,
      )}
    >
      {children}
    </button>
  );
};

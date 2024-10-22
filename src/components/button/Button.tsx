import { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from 'react';
import { ButtonProps } from './Button.types';
import Link from 'next/link';
import clsx from 'clsx';

export const Button: FC<ButtonProps> = ({
  children,
  href,
  className,
  ...props
}) => {
  return href ? (
    <Link
      href={href}
      passHref
      {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      className={clsx(
        'bg-purple hover:bg-deepPurple focus:bg-deepPurple duration-300 text-white py-2 px-4 rounded',
        className,
      )}
    >
      {children}
    </Link>
  ) : (
    <button
      className={clsx(
        'bg-purple hover:bg-deepPurple focus:bg-deepPurple duration-300 text-white py-2 px-4 rounded',
        className,
      )}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

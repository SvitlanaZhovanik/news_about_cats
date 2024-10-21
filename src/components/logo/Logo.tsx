import Link from 'next/link';
import { FC } from 'react';
import { ILogoProps } from './Logo.types';
import clsx from 'clsx';

export const Logo: FC<ILogoProps> = ({ className }) => {
  return (
    <Link
      href="/"
      className={clsx(
        'font-emilysCandy text-3xl md:text-4xl hover:text-deepGreen focus:text-deepGreen duration-300 dark:hover:text-purple dark:focus:text-purple',
        className,
      )}
    >
      Cat&apos;s news
    </Link>
  );
};

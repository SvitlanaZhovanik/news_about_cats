import Link from 'next/link';
import Profile from '@/../public/images/profile.svg';
import { Logo } from '@/components/logo/Logo';

import data from '@/data/common.json';

export const Header = () => {
  return (
    <header className="bg-lightGreen text-white py-4 opacity-60 md:py-8 dark:bg-deepPurple dark:opacity-100">
      <div className="container flex justify-between">
        <Logo />
        <Link
          href="/login"
          className="inline-flex items-center"
          aria-label={data.header.ariaLabel}
        >
          <Profile className="w-7 h-7 md:w-10 md:h-10 text-white hover:text-deepGreen focus:text-deepGreen duration-300 dark:hover:text-purple dark:focus:text-purple" />
        </Link>
      </div>
    </header>
  );
};

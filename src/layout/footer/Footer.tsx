import { Logo } from '@/components/logo/Logo';

export const Footer = () => {
  return (
    <footer className="bg-deepGreen text-white py-4 opacity-60 md:py-8 dark:bg-deepPurple">
      <div className="container flex flex-col md:flex-row md:justify-between md:items-center">
        <Logo className="hover:text-lightGreen focus:text-lightGreen smOnly:mb-5" />
        <p className="text-sm md:text-base">
          &copy;
          {`${new Date().getFullYear()} Cat's news. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
};

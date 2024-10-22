import { Logo } from '@/components/logo/Logo';
import data from '@/data/common.json';

export const Footer = () => {
  return (
    <footer className="bg-deepGreen text-white py-4 opacity-60 dark:opacity-100 md:py-8 dark:bg-deepPurple">
      <div className="container flex flex-col md:flex-row md:justify-between md:items-center">
        <Logo className="hover:text-lightGreen focus:text-lightGreen smOnly:mb-5" />
        <p className="text-sm md:text-base">
          &copy;
          {`${new Date().getFullYear()} ${data.footer.rights}`}
        </p>
      </div>
    </footer>
  );
};

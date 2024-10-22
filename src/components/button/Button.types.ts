import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

export type ButtonProps =
  | (AnchorHTMLAttributes<HTMLAnchorElement> & { href: string } & {
      children: React.ReactNode;
      className?: string;
    })
  | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined } & {
      children: React.ReactNode;
      className?: string;
    });

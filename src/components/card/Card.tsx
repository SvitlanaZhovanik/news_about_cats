import { FC } from 'react';
import Image from 'next/image';
import { Button } from '../button/Button';
import Arrow from '@/../public/images/arrow.svg';
import data from '@/data/main.json';
import { ICardProps } from './Card.types';

export const Card: FC<ICardProps> = ({ title, description, image, href }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700">
      <a href={href} target="_blank" rel="noopener noreferrer nofollow">
        <Image
          className="rounded-t-lg h-auto max-w-sm w-full transition-all duration-300 cursor-pointer filter xl:grayscale xl:hover:grayscale-0"
          src={image ? image : '/images/placeholder.webp'}
          alt={title}
          width={384}
          height={256}
        />
      </a>
      <div className="p-5">
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <Button
          href={href}
          className="inline-flex gap-5 items-center"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          {data.card.button}
          <Arrow class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
};

import { FC } from 'react';
import Image from 'next/image';
import { Button } from '../button/Button';
import Arrow from '@/../public/images/arrow.svg';
import data from '@/data/main.json';
import { ICardProps } from './Card.types';

export const Card: FC<ICardProps> = card => {
  const { title, description, enclosureUrl, link, enclosureType } = card;
  return (
    <li className="group smOnly:mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700">
      <a href={link} target="_blank" rel="noopener noreferrer nofollow">
        <Image
          className="rounded-t-lg h-auto max-h-[200px] max-w-sm w-full transition-all duration-300 cursor-pointer object-cover object-center filter xl:grayscale xl:group-hover:grayscale-0"
          src={enclosureUrl ? enclosureUrl : '/images/placeholder.webp'}
          alt={title}
          width={384}
          height={256}
          itemType={enclosureType || undefined}
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
          href={link}
          className="inline-flex gap-5 items-center"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          {data.card.button}
          <Arrow class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" />
        </Button>
      </div>
    </li>
  );
};

import { FC } from 'react';
import { Card } from '../card/Card';
import { ICardsListProps } from './CardsList.types';
import { ICardProps } from '../card/Card.types';

export const CardsList: FC<ICardsListProps> = ({ cards }) => {
  return cards?.length > 0 ? (
    <ul className="gap-3 grid md:grid-cols-2 xl:grid-cols-3 md:gap-5 xl:gap-6">
      {cards.map((card: ICardProps, index: number) => {
        return <Card key={index} {...card} />;
      })}
    </ul>
  ) : (
    <p className="text-center text-gray-500">No cards to show</p>
  );
};

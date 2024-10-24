import React, { FC } from 'react';
import clsx from 'clsx';
import { LabelProps } from './Label.types';

export const Label: FC<LabelProps> = ({ labelText, children, className }) => {
  return (
    <label className={clsx('relative block', className)}>
      {labelText && (
        <span className="mb-2 text-sm text-gray-900 dark:text-white">
          {labelText}
        </span>
      )}
      {children}
    </label>
  );
};

import React, { ForwardedRef, forwardRef } from 'react';
import clsx from 'clsx';
import { ErrorMessage } from '@/components/formComponents/errorMessage/ErrorMessage';
import { InputProps } from './Input.types';

export const Input = forwardRef(
  (
    { error, className, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <>
        <input
          ref={ref}
          className={clsx(
            'shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lightGreen focus:border-deepGreen block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple dark:focus:border-deepPurple dark:shadow-sm-light',
            {
              inputError: error,
            },
            className,
          )}
          aria-invalid={error ? 'true' : 'false'}
          {...props}
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </>
    );
  },
);

Input.displayName = 'Input';

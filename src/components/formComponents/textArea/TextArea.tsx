import React, { ForwardedRef, forwardRef } from 'react';

import clsx from 'clsx';
import { ErrorMessage } from '@/components/formComponents/errorMessage/ErrorMessage';
import { TextAreaProps } from './TextArea.tupes';

export const TextArea = forwardRef(
  (
    { error, className, ...props }: TextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ) => {
    return (
      <>
        <textarea
          ref={ref}
          className={clsx(
            'inputDefault',
            {
              inputError: error,
            },
            className,
          )}
          {...props}
        ></textarea>

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </>
    );
  },
);

TextArea.displayName = 'TextArea';

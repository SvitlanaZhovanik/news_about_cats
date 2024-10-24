'use client';
import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '@/components/formComponents/input/Input';
import { Label } from '@/components/formComponents/label/Label';
import { Button } from '@/components/button/Button';

type Inputs = Record<string, object>;

export const AuthForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    criteriaMode: 'all',
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.info(data);
    reset();
  };
  return (
    <form className="mx-auto w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-full grid-cols-1 gap-6">
        <Label labelText={'Email address'} className="text-left">
          <Input
            {...register('email')}
            error={errors.email?.message}
            placeholder="john@example.com"
          />
        </Label>
        <Label labelText="Password" className="text-left">
          <Input
            {...register('password')}
            error={errors.password?.message}
            placeholder="********"
            type="password"
          />
        </Label>

        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

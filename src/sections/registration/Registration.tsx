import { AuthForm } from '@/components/forms/authForm/AuthForm';
import { Button } from '@/components/button/Button';
import data from '@/data/registration.json';

export const Registration = () => {
  return (
    <section className="h-[81vh]">
      <div className="container flex flex-col items-center justify-center h-full">
        <h1 className="my-5 text-3xl text-center font-emilysCandy">
          {data.title}
        </h1>
        <AuthForm />

        <div className="mt-8 flex items-center justify-center gap-4">
          <p className="text-sm text-center">{data.text}</p>
          <Button href={data.linkTo}>{data.link}</Button>
        </div>
      </div>
    </section>
  );
};

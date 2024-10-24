import Image from 'next/image';
import Paw from '@/../public/images/paw.svg';
import { Button } from '@/components/button/Button';
import { clsx } from 'clsx';

const positionPaws = [
  'rotate-[80deg] left-[0px] top-5',
  'rotate-[110deg] left-[80px] top-[70px]',
  'rotate-[95deg] left-[170px] top-5',
  'rotate-[120deg] left-[230px] top-20',
  'rotate-[80deg] left-[320px] top-10',
  'rotate-[65deg] left-[400px] top-[85px]',
  'rotate-[75deg] left-[480px] top-15',
  'rotate-[85deg] left-[570px] top-[55px]',
];

export const Hero = () => {
  return (
    <section className="py-10 md:py-[60px]">
      <div className="container md:flex md:justify-between">
        <div>
          <h1 className="text-2xl mb-4 md:mb-8 md:text-4xl xl:text-5xl font-emilysCandy">
            Welcome to the Cats News
          </h1>
          <p className="texts-sm md:text-base xl:text-xl mb-5 md:mb-10">
            The best place to find the latest news about cats.
          </p>
          <div className="hidden xl:block xl:relative w-full h-[200px]">
            {positionPaws.map((paw, index) => (
              <Paw
                key={index}
                id={`paw-${index + 1}`}
                className={clsx(`absolute w-10 h-10 opacity-0`, paw)}
              />
            ))}
          </div>
          <Button
            href="login"
            className="smOnly:inline-block md:py-4 md:px-10 md:text-xl"
          >
            Login
          </Button>
        </div>
        <Image
          src="/images/cat.png"
          alt="Cat hero"
          width={453}
          height={600}
          priority
          className=" md:grow smOnly:ml-auto sm:w-[300px] md:w-[430px] xl:max-w-[453px]"
        />
      </div>
    </section>
  );
};

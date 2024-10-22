import Image from 'next/image';
import Paw from '@/../public/images/paw.svg';
import { Button } from '@/components/button/Button';

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
            <Paw className="paw-1 rotate-[80deg] absolute w-10 h-10 left-[0px] top-5 opacity-0" />
            <Paw className="paw-2 rotate-[110deg] absolute w-10 h-10 left-[80px] top-[70px] opacity-0" />
            <Paw className="paw-3 rotate-[95deg] absolute w-10 h-10 left-[170px] top-5 opacity-0" />
            <Paw className="paw-4 rotate-[120deg] absolute w-10 h-10 left-[230px] top-20 opacity-0" />
            <Paw className="paw-5 rotate-[80deg] absolute w-10 h-10 left-[320px] top-10 opacity-0" />
            <Paw className="paw-6 rotate-[65deg] absolute w-10 h-10 left-[400px] top-[85px] opacity-0" />
            <Paw className="paw-7 rotate-[75deg] absolute w-10 h-10 left-[480px] top-15 opacity-0" />
            <Paw className="paw-8 rotate-[85deg] absolute w-10 h-10 left-[570px] top-[55px] opacity-0" />
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

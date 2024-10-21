import Image from 'next/image';
export const Hero = () => {
  return (
    <section className="py-10 md:py-[60px]">
      <div className="container md:flex md:justify-between">
        <div>
          <h1 className="text-2xl mb-4 md:mb-8 md:text-4xl xl:text-5xl font-emilysCandy">
            Welcome to the Cats News
          </h1>
          <p className="text-sm md:text-base xl:text-xl">
            The best place to find the latest news about cats.
          </p>
        </div>
        <Image
          src="/images/cat.png"
          alt="Cat hero"
          width={528}
          height={600}
          className="smOnly:mx-auto md:grow sm:w-1/2 md:w-[430px] xl:max-w-[528px]"
        />
      </div>
    </section>
  );
};

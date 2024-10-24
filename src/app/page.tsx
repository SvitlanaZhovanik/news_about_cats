import { AuthForm } from '@/components/forms/authForm/AuthForm';
import { Hero } from '@/sections/hero/Hero';
import { News } from '@/sections/news/News';

export default function Home() {
  return (
    <>
      <Hero />
      <News />
      <AuthForm />
    </>
  );
}

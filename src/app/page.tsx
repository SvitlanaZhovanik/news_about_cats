import { Card } from '@/components/card/Card';
import { Hero } from '@/sections/hero/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <Card title="Title" description="Description" href="/news" />
    </>
  );
}

import { CardsList } from '@/components/cardsList/CardsList';
import baseApi from '@/utils/baseApi';

export const News = async () => {
  const { data } = await baseApi.get('/api/article');
  const news = data?.data;

  return (
    <section className="pb-5 md:pb-[60px]">
      <div className="container">
        <h2 className="sr-only">News</h2>
        <CardsList cards={news} />
      </div>
    </section>
  );
};

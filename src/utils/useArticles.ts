'use client';
import { useSearchParams } from 'next/navigation';
import baseApi from './baseApi';
const ARTICLES = '/api/article';
// import { useQuery } from '@tanstack/react-query';

export const useGetArticles = () => {
  const params = useSearchParams();
  const searchParams = params ? params.toString() : null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getArticles = async (params: string | null): Promise<any> => {
    const url = params ? `${ARTICLES}?${params}` : ARTICLES;
    const response = await baseApi.get(url);
    return response.data;
  };

  return getArticles(searchParams);
  //     useQuery({
  //     queryKey: [ARTICLES, searchParams],
  //     queryFn: () => getArticles(searchParams),
  //   });
};

import { useQuery } from '@tanstack/react-query';

import { http } from '../../../providers/http-service';

export const useRepoData = () => {
  const { isPending, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => http.get(`${import.meta.env.VITE_API_URL}/TanStack/query`),
  });

  return { isPending, data: data?.data };
};

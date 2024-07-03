import { http } from "../../providers/http-service";
import { useQuery } from "@tanstack/react-query";

export interface DataDetails {
  name: string;
  description: string;
  subscribers_count: number;
  stargazers_count: number;
  forks_count: number;
}

class MainPageService {
  public useMainPageData(): {
    isPending: boolean;
    data: DataDetails;
  } {
    const { isPending, data } = useQuery({
      queryKey: ["repoData"],
      queryFn: () => http.get(`${import.meta.env.VITE_API_URL}/TanStack/query`),
    });

    return { isPending, data: data?.data };
  }
}

export const mainPageService = new MainPageService();

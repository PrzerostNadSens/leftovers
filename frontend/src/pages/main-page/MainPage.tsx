import { Typography } from "@mui/material";
import { http } from "../../providers/http-service";
import { useQuery } from "@tanstack/react-query";

export default function MainPageContent() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      http
        .get(`${import.meta.env.VITE_API_URL}/TanStack/query`)
        .then((response) => response.data),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <Typography variant="h4" color="textSecondary">
        {data.name}
      </Typography>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}

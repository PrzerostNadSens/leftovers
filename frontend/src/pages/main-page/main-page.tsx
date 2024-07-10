import { Typography } from "@mui/material";
import { useRepoData } from "./query/useRepoData";

export default function MainPageContent() {
  const { isPending, data } = useRepoData();

  if (isPending) return "Loading...";

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

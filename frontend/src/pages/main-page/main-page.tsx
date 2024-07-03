import { Typography } from "@mui/material";
import { mainPageService } from "./main-page-service";

export default function MainPageContent() {
  const { isPending, data } = mainPageService.useMainPageData();

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

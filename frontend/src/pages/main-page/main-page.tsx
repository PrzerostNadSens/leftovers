import { Box, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';
import { useRepoData } from './query/useRepoData';

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

export default function MainPageContent() {
  const { isPending, data } = useRepoData();

  if (isPending) return 'Loading...';

  return (
    <StyledBox>
      <Typography variant="h4" color="textSecondary">
        {data.name}
      </Typography>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong> <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </StyledBox>
  );
}

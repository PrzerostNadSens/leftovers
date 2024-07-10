import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import MainPageContent from '../main-page';
import { useRepoData } from '../query/useRepoData';

const mockData = {
  name: 'Test Repo',
  description: 'This is a test repository.',
  subscribers_count: 100,
  stargazers_count: 200,
  forks_count: 300,
};

vi.mock('../query/useRepoData');

const queryClient = new QueryClient();

describe('MainPageContent', () => {
  it('renders loading state', () => {
    (useRepoData as jest.Mock).mockReturnValue({ isPending: true, data: null });

    render(
      <QueryClientProvider client={queryClient}>
        <MainPageContent />
      </QueryClientProvider>,
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders the MainPageContent', () => {
    (useRepoData as jest.Mock).mockReturnValue({
      isPending: false,
      data: mockData,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <MainPageContent />
      </QueryClientProvider>,
    );

    expect(screen.getByText(mockData.name)).toBeInTheDocument();
    expect(screen.getByText(mockData.description)).toBeInTheDocument();
    expect(screen.getByText(`👀 ${mockData.subscribers_count}`)).toBeInTheDocument();
    expect(screen.getByText(`✨ ${mockData.stargazers_count}`)).toBeInTheDocument();
    expect(screen.getByText(`🍴 ${mockData.forks_count}`)).toBeInTheDocument();
  });
});

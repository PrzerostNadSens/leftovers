import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";

import MainPageContent from "../main-page";
import { mainPageService } from "../main-page-service";
import { vi } from "vitest";

const mockData = {
  name: "Test Repo",
  description: "This is a test repository.",
  subscribers_count: 100,
  stargazers_count: 200,
  forks_count: 300,
};

vi.mock("../main-page-service", () => ({
  mainPageService: {
    useMainPageData: () => ({
      isPending: false,
      data: mockData,
    }),
  },
}));

const queryClient = new QueryClient();

describe("MainPageContent", () => {
  it("renders loading state", () => {
    vi.spyOn(mainPageService, "useMainPageData").mockReturnValueOnce({
      isPending: true,
      data: mockData,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <MainPageContent />
      </QueryClientProvider>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders the MainPageContent", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MainPageContent />
      </QueryClientProvider>
    );

    expect(screen.getByText(mockData.name)).toBeInTheDocument();
    expect(screen.getByText(mockData.description)).toBeInTheDocument();
    expect(
      screen.getByText(`👀 ${mockData.subscribers_count}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`✨ ${mockData.stargazers_count}`)
    ).toBeInTheDocument();
    expect(screen.getByText(`🍴 ${mockData.forks_count}`)).toBeInTheDocument();
  });
});

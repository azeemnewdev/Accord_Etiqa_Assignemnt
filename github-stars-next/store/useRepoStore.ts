import { GitHubRepo } from '@/models/github-repo.model';
import { create } from 'zustand';

interface RepoStore {
  repos: GitHubRepo[];
  setRepos: (repos: GitHubRepo[]) => void;
  appendRepos: (repos: GitHubRepo[]) => void;
  clearRepos: () => void;
}

export const useRepoStore = create<RepoStore>((set) => ({
  repos: [],
  setRepos: (repos) => set({ repos }),
  appendRepos: (newRepos) =>
    set((state) => ({
      repos: [...state.repos, ...newRepos.filter((r) => !state.repos.find((x) => x.id === r.id))],
    })),
  clearRepos: () => set({ repos: [] }),
}));

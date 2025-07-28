import { GitHubRepo } from "@/models/github-repo.model";

export const CONFIG = {
    BASE_URL: process.env.GITHUB_API_BASE_URL ?? "https://api.github.com",
}

export const fetchRepos = async (pageNumber: number = 1): Promise<GitHubRepo[]> => {
    const today = new Date();
    const pastDate = new Date(today.setDate(today.getDate() - 10))
        .toISOString()
        .split('T')[0];

    let endpoint = `${CONFIG.BASE_URL}/search/repositories?q=created:>${pastDate}&sort=stars&order=desc`;

    if (pageNumber > 1) {
        endpoint = endpoint + `&page=${pageNumber}`;
    }

    const response = await fetch(endpoint, {
        method: 'GET',
    });

    if (!response.ok) {
        // @ts-ignore
        throw new Error('Failed to fetch repos', response.statusText);
    }

    const data = await response.json();
    
    return data["items"];
}
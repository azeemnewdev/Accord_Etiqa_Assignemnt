'use client'
import { fetchRepos } from "@/services/api";
import { useRepoStore } from "@/store/useRepoStore";
import { useEffect, useState } from "react";

const useRepos = () => {
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const repos = useRepoStore((state) => state.repos);
    const appendRepos = useRepoStore((state) => state.appendRepos);

    const loadRepos = async () => {
        if (loading) return;

        setLoading(true);
        setError(null);

        try {
            const newRepos = await fetchRepos(page);
            appendRepos(newRepos)
            setPage(page+1);
        } catch (err: any) {
            setError(err.message || 'Error loading more repos');
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        loadRepos();
    }, []);

    return { repos, loading, error, loadRepos };
}

export default useRepos;
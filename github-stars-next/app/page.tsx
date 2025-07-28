'use client'
import RepoDetailsCard from "@/components/repo-details-card";
import useRepos from "@/hooks/useRepos";
import { useEffect, useRef } from "react";

export default function Home() {
  const { repos, loading, loadRepos } = useRepos();
  const loader = useRef<HTMLDivElement | null>(null);
  
  const loadMore = async () => {
    loadRepos();
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !loading) {
          loadMore();
        }
      },
      { threshold: 1.0 }
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [loading]);
  
  return (
    <div className="w-full pb-20">
      <div className="text-center pt-10 pb-5">
        <p className="font-bold text-3xl">Trending Repos</p>
      </div>
      {repos.map((item) => (
        <RepoDetailsCard key={item.id} item={item}/>
      ))}
      <div ref={loader} className="text-center py-4 text-gray-500">
        {loading ? 'Loading more...' : 'Scroll to load more'}
      </div>
    </div>
  );
}

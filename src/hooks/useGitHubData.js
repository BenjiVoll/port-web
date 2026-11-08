import { useState, useEffect, useCallback } from 'react';

const GITHUB_USERNAME = 'BenjiVoll';

export function useGitHubData() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastSynced, setLastSynced] = useState(null);
  const [error, setError] = useState(null);

  const fetchGitHub = useCallback(async (force = false) => {
    setLoading(true);
    setError(null);

    try {
      const cacheKey = 'bv_github_cache_v1';
      if (!force) {
        const cached = sessionStorage.getItem(cacheKey);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Date.now() - parsed.timestamp < 5 * 60 * 1000) {
            setProfile(parsed.profile);
            setRepos(parsed.repos);
            setLastSynced(new Date(parsed.timestamp));
            setLoading(false);
            return;
          }
        }
      }

      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`),
      ]);

      if (!userRes.ok || !reposRes.ok) {
        throw new Error('Límite de consultas de GitHub alcanzado temporalmente');
      }

      const [userData, reposData] = await Promise.all([
        userRes.json(),
        reposRes.json(),
      ]);

      const now = Date.now();
      sessionStorage.setItem(
        cacheKey,
        JSON.stringify({
          timestamp: now,
          profile: userData,
          repos: Array.isArray(reposData) ? reposData : [],
        })
      );

      setProfile(userData);
      setRepos(Array.isArray(reposData) ? reposData : []);
      setLastSynced(new Date(now));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGitHub(false);
  }, [fetchGitHub]);

  return {
    profile,
    repos,
    loading,
    error,
    lastSynced,
    refresh: () => fetchGitHub(true),
  };
}

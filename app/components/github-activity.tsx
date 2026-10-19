"use client";

import { useEffect, useState } from "react";

type GitHubRepository = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
};

function isGitHubRepository(value: unknown): value is GitHubRepository {
  if (typeof value !== "object" || value === null) return false;

  const repository = value as Record<string, unknown>;
  return typeof repository.id === "number"
    && typeof repository.name === "string"
    && typeof repository.html_url === "string"
    && (typeof repository.description === "string" || repository.description === null)
    && (typeof repository.language === "string" || repository.language === null)
    && typeof repository.stargazers_count === "number"
    && typeof repository.pushed_at === "string"
    && typeof repository.fork === "boolean"
    && typeof repository.archived === "boolean";
}

export default function GitHubActivity() {
  const [repositories, setRepositories] = useState<GitHubRepository[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [retry, setRetry] = useState(0);
  const [chartUnavailable, setChartUnavailable] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadRepositories() {
      try {
        const response = await fetch(
          "https://api.github.com/users/BRIAN-pixel275/repos?sort=pushed&direction=desc&per_page=20&type=owner",
          {
            headers: { Accept: "application/vnd.github+json" },
            signal: controller.signal,
          },
        );

        if (!response.ok) {
          throw new Error(`GitHub returned ${response.status} while loading repositories.`);
        }

        const data: unknown = await response.json();
        if (!Array.isArray(data) || !data.every(isGitHubRepository)) {
          throw new Error("GitHub returned repository data in an unexpected format.");
        }

        const activeRepositories = data
          .filter((repository) => !repository.fork && !repository.archived)
          .sort((first, second) => Date.parse(second.pushed_at) - Date.parse(first.pushed_at))
          .slice(0, 6);

        setRepositories(activeRepositories);
      } catch (requestError) {
        if (controller.signal.aborted) return;

        const message = requestError instanceof Error
          ? requestError.message
          : "An unknown error occurred while loading GitHub repositories.";
        console.error("Unable to load GitHub repositories:", requestError);
        setError(message);
      }
    }

    void loadRepositories();
    return () => controller.abort();
  }, [retry]);

  return (
    <section id="github" className="github-section" aria-labelledby="github-h">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Live from GitHub</p>
          <h2 id="github-h" className="section-h">Code, commits & current projects</h2>
        </div>
        <a className="github-profile-link" href="https://github.com/BRIAN-pixel275" target="_blank" rel="noreferrer">
          Visit my GitHub profile <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="github-layout">
        <div className="contribution-panel">
          <h3>Contribution activity</h3>
          <p className="github-intro">My contribution graph over the past year.</p>
          <a className="contribution-chart" href="https://github.com/BRIAN-pixel275" target="_blank" rel="noreferrer">
            {chartUnavailable
              ? <span className="github-message">The contribution chart could not load. View activity on my GitHub profile.</span>
              : <img
                  src="https://ghchart.rshah.org/BRIAN-pixel275"
                  alt="GitHub contribution activity for BRIAN-pixel275 over the past year"
                  loading="lazy"
                  onError={() => setChartUnavailable(true)}
                />}
          </a>
          <p className="meta">Chart provided by ghchart.rshah.org. Select it to view my GitHub profile.</p>
        </div>

        <div className="repositories-panel" aria-live="polite">
          <h3>Recently pushed repositories</h3>
          <p className="github-intro">Public repositories sorted by recent push activity. Push activity may not indicate current project status.</p>
          {repositories === null && error === null && <p className="github-message">Loading repositories from GitHub…</p>}
          {error && (
            <div className="github-message github-error" role="alert">
              <p>{error}</p>
              <button type="button" onClick={() => { setError(null); setRepositories(null); setRetry((value) => value + 1); }}>
                Try again
              </button>
            </div>
          )}
          {repositories && repositories.length === 0 && (
            <p className="github-message">No active public repositories were returned. Visit the GitHub profile for the full list.</p>
          )}
          {repositories && repositories.length > 0 && (
            <ul className="repository-list">
              {repositories.map((repository) => (
                <li key={repository.id} className="repository-item">
                  <div className="repository-heading">
                    <h4><a href={repository.html_url} target="_blank" rel="noreferrer">{repository.name}<span aria-hidden="true"> ↗</span></a></h4>
                    <span className="repository-stars" aria-label={`${repository.stargazers_count} stars`}>★ {repository.stargazers_count}</span>
                  </div>
                  <p>{repository.description || "No description provided."}</p>
                  <div className="repository-meta">
                    {repository.language && <span>{repository.language}</span>}
                    <span>Last pushed {new Date(repository.pushed_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

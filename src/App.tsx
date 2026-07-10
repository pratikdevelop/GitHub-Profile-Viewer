import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import SearchBar from "./components/SearchBar";

import type { GitHubUser } from "./types/github";
import { fetchGithubUser } from "./services/githubApi";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchUser = async () => {
    const trimmed = username.trim();

    if (!trimmed) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchGithubUser(trimmed);
      setUser(data);
    } catch (err: any) {
      setError(
        err.message === "User not found"
          ? "User not found. Please check the username."
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const clearSearch = () => {
    setUsername("");
    setUser(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-3 mb-3">

            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              GitHub Profile Viewer
            </h1>
          </div>

          <p className="text-gray-600">
            Discover GitHub profiles instantly
          </p>
        </div>

        <SearchBar
          username={username}
          setUsername={setUsername}
          loading={loading}
          onSearch={searchUser}
          onClear={clearSearch}
        />

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-2xl mb-6">
            ⚠️ {error}
          </div>
        )}

        {loading && (
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>

            <p className="text-gray-600">
              Loading profile...
            </p>
          </div>
        )}

        {user && <ProfileCard user={user} />}

        {!user && !loading && !error && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-2xl mb-2">👤</p>

            <p>Search for any GitHub username above</p>

            <p className="text-sm mt-1">
              Example: torvalds, gaearon, octocat
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
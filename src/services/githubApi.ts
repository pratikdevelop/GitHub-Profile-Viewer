import type { GitHubUser } from "../types/github";
export const fetchGithubUser = async (
  username: string
): Promise<GitHubUser> => {
  const response = await fetch(
    `https://api.github.com/users/${username}`
  );

  if (!response.ok) {
    throw new Error("User not found");
  }

  return response.json();
};
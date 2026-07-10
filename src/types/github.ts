export interface GitHubUser {
  avatar_url: string;
  name: string | null;
  login: string;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
}
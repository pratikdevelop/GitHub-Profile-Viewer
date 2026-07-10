// src/components/ProfileCard.tsx
interface GitHubUser {
  avatar_url: string;
  name: string | null;
  login: string;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
}

interface ProfileCardProps {
  user: GitHubUser;
}

export default function ProfileCard({ user }: ProfileCardProps) {
  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Cover */}
      <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>

      <div className="px-6 pb-8 -mt-12">
        {/* Avatar */}
        <div className="flex justify-center">
          <img
            src={user.avatar_url}
            alt={user.name || user.login}
            className="w-28 h-28 rounded-2xl border-4 border-white shadow-md"
          />
        </div>

        {/* Name & Username */}
        <div className="text-center mt-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            {user.name || user.login}
          </h2>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-lg mt-1 inline-block"
          >
            @{user.login}
          </a>
        </div>

        {/* Bio */}
        {user.bio && (
          <p className="text-gray-600 text-center mt-6 text-lg leading-relaxed px-4">
            {user.bio}
          </p>
        )}

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-10">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">
              {formatNumber(user.public_repos)}
            </div>
            <div className="text-sm text-gray-500 mt-1">Repositories</div>
          </div>
          <div className="text-center border-x border-gray-100">
            <div className="text-3xl font-bold text-gray-900">
              {formatNumber(user.followers)}
            </div>
            <div className="text-sm text-gray-500 mt-1">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">
              {formatNumber(user.following)}
            </div>
            <div className="text-sm text-gray-500 mt-1">Following</div>
          </div>
        </div>

        {/* Action Button */}
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 block w-full bg-gray-900 hover:bg-black text-white text-center py-4 rounded-2xl font-medium transition-colors"
        >
          View Full Profile on GitHub
        </a>
      </div>
    </div>
  );
}
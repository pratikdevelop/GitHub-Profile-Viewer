import { memo } from "react";
import {
  MapPin,
  Building2,
  Globe,
  CalendarDays,
  BookOpen,
  Users,
  UserPlus,
  FileCode2,
  ExternalLink,
} from "lucide-react";

import  type  { GitHubUser } from "../types/github";

interface ProfileCardProps {
  user: GitHubUser;
}

const formatNumber = (num: number) => num.toLocaleString();

const ProfileCard = ({ user }: ProfileCardProps) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">

      {/* Cover */}
      <div className="h-36 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"></div>

      <div className="px-6 pb-8 -mt-16">

        {/* Avatar */}
        <div className="flex justify-center">
          <img
            src={user.avatar_url}
            alt={user.login}
            loading="lazy"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
        </div>

        {/* Name */}
        <div className="text-center mt-5">
          <h2 className="text-3xl font-bold text-gray-900">
            {user.name || user.login}
          </h2>

          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-2 text-blue-600 hover:text-blue-700 hover:underline"
          >
            @{user.login}
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Bio */}
        <div className="mt-5">
          <p className="text-center text-gray-600 leading-relaxed">
            {user.bio || "No bio available."}
          </p>
        </div>

        {/* Additional Details */}
        <div className="mt-8 space-y-3 text-gray-700">

          {user.location && (
            <div className="flex items-center gap-3">
              <MapPin className="text-red-500" size={18} />
              <span>{user.location}</span>
            </div>
          )}

          {user.company && (
            <div className="flex items-center gap-3">
              <Building2 className="text-indigo-600" size={18} />
              <span>{user.company}</span>
            </div>
          )}

          {user.blog && (
            <div className="flex items-center gap-3">
              <Globe className="text-green-600" size={18} />

              <a
                href={
                  user.blog.startsWith("http")
                    ? user.blog
                    : `https://${user.blog}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline truncate"
              >
                {user.blog}
              </a>
            </div>
          )}

          <div className="flex items-center gap-3">
            <CalendarDays className="text-orange-500" size={18} />

            <span>
              Joined{" "}
              {new Date(user.created_at).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

          <div className="bg-blue-50 rounded-2xl p-4 text-center hover:shadow-md transition">
            <BookOpen className="mx-auto mb-2 text-blue-600" />
            <h3 className="text-2xl font-bold">
              {formatNumber(user.public_repos)}
            </h3>
            <p className="text-sm text-gray-600">
              Repositories
            </p>
          </div>

          <div className="bg-green-50 rounded-2xl p-4 text-center hover:shadow-md transition">
            <Users className="mx-auto mb-2 text-green-600" />
            <h3 className="text-2xl font-bold">
              {formatNumber(user.followers)}
            </h3>
            <p className="text-sm text-gray-600">
              Followers
            </p>
          </div>

          <div className="bg-purple-50 rounded-2xl p-4 text-center hover:shadow-md transition">
            <UserPlus className="mx-auto mb-2 text-purple-600" />
            <h3 className="text-2xl font-bold">
              {formatNumber(user.following)}
            </h3>
            <p className="text-sm text-gray-600">
              Following
            </p>
          </div>

          <div className="bg-orange-50 rounded-2xl p-4 text-center hover:shadow-md transition">
            <FileCode2 className="mx-auto mb-2 text-orange-600" />
            <h3 className="text-2xl font-bold">
              {formatNumber(user.public_gists)}
            </h3>
            <p className="text-sm text-gray-600">
              Public Gists
            </p>
          </div>

        </div>

        {/* View Profile Button */}
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-2xl transition-all duration-300"
        >
          <ExternalLink size={18} />
          View GitHub Profile
        </a>

      </div>
    </div>
  );
};

export default memo(ProfileCard);
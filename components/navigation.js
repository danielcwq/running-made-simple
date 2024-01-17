// Navigation.js

import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  return (
    <div className="my-6 shadow-md">
      <div className="mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-x-2">
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-gray-900 hover:bg-gray-100 px-5 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
          </div>
          {router.pathname !== "/training-zone-calculator" && (
            <Link
              href="/training-zone-calculator"
              className="text-gray-600 hover:text-gray-900 px-5 py-2 rounded-md text-sm font-medium"
            >
              Training Zone Calculator
            </Link>
          )}
          {router.pathname !== "/race-pace-calculator" && (
            <Link
              href="/race-pace-calculator"
              className="text-gray-600 hover:text-gray-900 px-5 py-2 rounded-md text-sm font-medium"
            >
              Race Pace Calculator
            </Link>
          )}
          {router.pathname !== "/blog" && (
            <Link
              href="/blog"
              className="text-gray-900 hover:bg-gray-100 px-5 py-2 rounded-md text-sm font-medium"
            >
              Blog
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;

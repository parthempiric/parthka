import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import type { Metadata } from 'next';
import { formatRelativeTime } from '../lib/date'; // Import formatRelativeTime

export const metadata: Metadata = {
  title: 'Home | Parthka', // Specific title for the homepage
};

export default function Home() {
  const allPostsData = getSortedPostsData();
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold">My Blog</h1>
        </header>
        <main>
          <ul>
            {allPostsData.map(({ id, date, title, description }) => (
              <li key={id} className="mb-4">
                <Link href={`/posts/${id}`} className="text-2xl font-bold text-blue-400 hover:underline">
                  {title}
                </Link>
                <br />
                <p className="text-gray-400 text-lg mt-1">{description}</p>
                <small className="text-gray-500">
                  <time dateTime={date} className='capitalize'>{formatRelativeTime(date)}</time> {/* Use formatRelativeTime */}
                </small>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}

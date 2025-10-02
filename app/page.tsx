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
    <div className="bg-p-bg text-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold">My Blog</h1>
        </header>
        <main>
          <ul>
            {allPostsData.map(({ id, date, title, description }) => (
              <li key={id} className="mb-4">
                <Link href={`/posts/${id}`} className="text-2xl font-bold text-p-lite hover:underline hover:text-p-primary">
                  {title}
                </Link>
                <br />
                <p className="text-sm mt-1 font-mono italic line-clamp-2 text-ellipsis text-p-secondary font-bold opacity-80">{description}</p>
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

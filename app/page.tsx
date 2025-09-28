import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

export default function Home() {
  const allPostsData = getSortedPostsData();
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold">My Blog</h1>
        </header>
        <main>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id} className="mb-4">
                <Link href={`/posts/${id}`} className="text-2xl font-bold text-blue-400 hover:underline">
                  {title}
                </Link>
                <br />
                <small className="text-gray-400">
                  {date}
                </small>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-red-500">!404</h1>
      <p className="text-xl text-gray-300 mt-4">Page Not Found</p>
      <Link href="/" className="text-blue-400 hover:underline mt-8">
        Go back home
      </Link>
    </div>
  );
}

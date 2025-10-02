import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../../lib/posts';
import type { Metadata } from 'next';
import MarkdownRenderer from '../../../components/MarkdownRenderer'; // Import the new component
import { formatRelativeTime } from '../../../lib/date'; // Import formatRelativeTime

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const postData = await getPostData((await params).id);
  return {
    title: postData.title,
    description: postData.seoDescription, // Use seoDescription for metadata
  };
}

export async function generateStaticParams() {
  const allPostIds = getAllPostIds();
  return allPostIds;
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData((await params).id);

  return (
    <div className="bg-p-bg text-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <article>
          <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
          <p className="text-gray-400 text-xl mb-4">{postData.description}</p> {/* Display description */}
          <div className="text-gray-500 mb-8">
            <p className='capitalize'>{formatRelativeTime(postData.date)}</p> {/* Use formatRelativeTime */}
          </div>
          <MarkdownRenderer contentHtml={postData.contentHtml} /> {/* Use MarkdownRenderer */}
        </article>
        <div className="mt-8">
          <Link href="/" className="text-blue-400 hover:underline">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../../lib/posts.ts';
import type { Metadata } from 'next';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const postData = await getPostData(params.id);
  return {
    title: postData.title,
    description: postData.title, // Using title as description for simplicity
  };
}

export async function generateStaticParams() {
  const allPostIds = getAllPostIds();
  return allPostIds;
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <article>
          <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
          <div className="text-gray-400 mb-8">
            {postData.date}
          </div>
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
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

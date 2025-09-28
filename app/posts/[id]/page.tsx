import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../../lib/posts.ts';
import type { Metadata } from 'next';
import parse, { DOMNode, Element, HTMLReactParserOptions } from 'html-react-parser';
import CodeBlock from '../../../components/CodeBlock';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const postData = await getPostData(params.id);
  return {
    title: postData.title,
    description: postData.title,
  };
}

export async function generateStaticParams() {
  const allPostIds = getAllPostIds();
  return allPostIds;
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);

  const options: HTMLReactParserOptions = {
    replace: (domNode: DOMNode) => {
      if (domNode instanceof Element && domNode.tagName === 'pre') {
        const codeElement = domNode.children[0] as Element;
        if (codeElement && codeElement.tagName === 'code') {
          const language = codeElement.attribs.class?.replace('language-', '') || 'text';
          const code = codeElement.children[0]?.data || '';
          return <CodeBlock language={language} value={code} />;
        }
      }
    },
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <article>
          <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
          <div className="text-gray-400 mb-8">
            {postData.date}
          </div>
          <div className="prose prose-invert max-w-none">
            {parse(postData.contentHtml, options)}
          </div>
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

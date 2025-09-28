'use client';

import parse, { DOMNode, Element, HTMLReactParserOptions } from 'html-react-parser';
import CodeBlock from './CodeBlock';

interface MarkdownRendererProps {
  contentHtml: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ contentHtml }) => {
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
    <div className="prose prose-invert max-w-none">
      {parse(contentHtml, options)}
    </div>
  );
};

export default MarkdownRenderer;

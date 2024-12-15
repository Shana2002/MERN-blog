import React from 'react';

const BlogContent = ({ content }) => {
  const processContent = (text) => {
    // Replace text wrapped in backticks with <code> tags and apply Tailwind classes
    const codePattern = /`([^`]+)`/g;
    text = text.replace(codePattern, '<div class="bg-black-rgba py-4 text-white w-full p-2 rounded-md">$1</div>');

    // Replace words to be bold (like Markdown `**bold**`)
    const boldPattern = /\*\*([^*]+)\*\*/g;
    text = text.replace(boldPattern, '<strong class="font-bold">$1</strong>');
    
    // Replace text with '###' to make it a larger heading (like Markdown headers)
    const headerPattern = /### (.+)/g;
    text = text.replace(headerPattern, '<h3 class="text-3xl font-bold mb-4">$1</h3>');
    
    return text;
  };

  return (
    <div className="blog-content">
      {content.map((para, index) => (
        <p
          className="mx-auto leading-relaxed text-base mb-4"
          key={index}
          dangerouslySetInnerHTML={{ __html: processContent(para) }}
        />
      ))}
    </div>
  );
};

export default BlogContent;

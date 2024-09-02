import React from 'react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding React Components',
      date: 'August 25, 2024',
      description: 'A deep dive into the world of React components, how they work, and how to use them effectively in your projects.',
    },
    {
      id: 2,
      title: 'CSS Grid vs. Flexbox',
      date: 'August 20, 2024',
      description: 'A comparison between CSS Grid and Flexbox, two powerful layout tools in modern web development.',
    },
    {
      id: 3,
      title: 'JavaScript ES6 Features',
      date: 'August 15, 2024',
      description: 'Exploring the key features introduced in ES6 and how they have transformed JavaScript programming.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-8">
      {/* Page Header */}
      <header className="bg-blue-700 text-white p-5 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Blog</h1>
        <p className="text-lg md:text-xl mt-2">
          Stay updated with our latest articles and insights.
        </p>
      </header>

      {/* Blog Posts */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-4">{post.date}</p>
              <p className="text-gray-700 mb-4">{post.description}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Read More
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default BlogPage;

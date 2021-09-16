import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Posts from 'components/Posts';

const BlogPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Blog" />

      {/* <Posts /> */}
      <div style={{ width: '100%', height: '0', paddingBottom: '100%', position: 'relative' }}>
        <p style={{ textAlign: 'center' }}>Blog currently under massive editing</p>
        <iframe
          src="https://giphy.com/embed/E6jscXfv3AkWQ"
          width="480"
          height="480"
          frameBorder="0"
          className="giphy-embed"
          style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
        ></iframe>
        <p style={{ textAlign: 'center' }}>
          <a href="https://giphy.com/gifs/cat-typing-E6jscXfv3AkWQ">via GIPHY</a>
        </p>
      </div>
    </Layout>
  );
};

export default BlogPage;

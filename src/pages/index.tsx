import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import Services from 'components/Services';
import Testimonials from 'components/Testimonials';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <div
        data-tf-popover="UyRPMhB5"
        data-tf-button-color="#52B4E3"
        data-tf-button-text="Launch me"
        data-tf-iframe-props="title=Website Leads"
        data-tf-medium="snippet"
        style={{ all: 'unset' }}
      ></div>
      <script src="//embed.typeform.com/next/embed.js"></script>
      <SEO title="About Me" />
      <HeroBanner />
      <Services />
      <hr />
      <Testimonials />
    </Layout>
  );
};

export default IndexPage;

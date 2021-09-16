import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Banner from 'components/ui/Banner';

import FormatHtml from 'components/utils/FormatHtml';

interface SectionHeroBanner {
  html: React.ReactNode;
  frontmatter: {
    title: string;
    subtitle: string;
    linkText: string;
    linkTo: string;
  };
}

const HeroBanner: React.FC = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "hero section" } }) {
        html
        frontmatter {
          title
          subtitle
          linkTo
          linkText
        }
      }
    }
  `);

  const {
    frontmatter: { title, subtitle, linkText, linkTo },
    html
  }: SectionHeroBanner = markdownRemark;

  return (
    <Banner
      title={title}
      subtitle={subtitle}
      content={<FormatHtml content={html} />}
      linkTo={linkTo}
      linkText={linkText}
    />
  );
};

export default HeroBanner;

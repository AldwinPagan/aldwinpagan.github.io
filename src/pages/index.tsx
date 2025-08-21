import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import HeroSection from '../components/hero-section.component';
import AboutSection from '../components/about-section.component';
import ServicesSection from '../components/service-section.component';
import ChallengesSection from '../components/challenges-section.component';
import WhyChooseSection from '../components/why-choose-section.component';
import TestimonialsSection from '../components/testimonial-section.component';
import { Contact } from 'lucide-react';
import ContactSection from '../components/contact-section.component';
import ScrollToTopButton from '../components/scroll-to-top-button';

function HomepageHeader() {
  
  return (
    <header className={clsx('bg-slate-500', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" >
          Your Digital Dreams, My Expertise. ✨
        </Heading>
        <p className="hero__subtitle">
          Delivering high-impact advice and providing the resources you need to turn your aspirations into a thriving reality.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            href="https://calendly.com/hello-aldwinpagan/60min-discovery"
            target='_self'
            >
            Schedule a Meeting
          </Link>
        </div>
      </div>
    </header>
  );
}


export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={"Home"}
      description="Your trusted partner for innovative software solutions that drive growth and transformation.">
      {/* <HomepageHeader /> */}
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection/>
        <ChallengesSection/>
        <WhyChooseSection/>
        <TestimonialsSection/>
        <ContactSection />
      </main>
      <ScrollToTopButton/>
    </Layout>
  );
}

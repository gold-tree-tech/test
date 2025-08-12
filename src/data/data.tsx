import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import avatarImage1 from '../images/avatar1.jpg';
import avatarImage2 from '../images/avatar2.jpg';
import avatarImage3 from '../images/avatar3.jpg';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume',
  description: "",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Masaru Yamada.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Senior Full Stack Engineer</strong> based in Tokyo, currently
        at <strong className="text-stone-100">Cosomil</strong> leading the JavaScript team's
        growth and building web/mobile apps.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        When I'm not coding, you'll find me climbing rocks or biking around
        <strong className="text-stone-100"> Ogawayama</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a full-stack JavaScript engineer who thrives on building seamless web experiences, mobile apps,
   and robust services using React, React Native, and Node.js. I love tackling complex problems across diverse industries 
   like finance and healthcare, especially when it involves tinkering with blockchain on the client side – always driven 
   by curiosity and clean code.`,
  aboutItems: [
    {label: 'Location', text: 'Tokyo, Japan', Icon: MapIcon},
    {label: 'Age', text: '33', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Japan', Icon: FlagIcon},
    {label: 'Interests', text: 'Climb, biking', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Tokyo', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Cosomil', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 10,
      },
      {
        name: 'Next.js',
        level: 10,
      },
      {
        name: 'Vue.js',
        level: 9,
      },
      {
        name: 'GraphQL',
        level: 9,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 10,
      },
      {
        name: 'FastAPI',
        level: 10,
      },
      {
        name: 'Django',
        level: 9,
      },
      {
        name: 'Golang',
        level: 8,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 6,
      },
      {
        name: 'Swift',
        level: 6,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Sumup',
    description: '',
    url: 'https://sumup.com',
    image: porfolioImage1,
  },
  {
    title: 'Wanderlog',
    description: '',
    url: 'https://wanderlog.com',
    image: porfolioImage2,
  },
  {
    title: 'Hybrent',
    description: '',
    url: 'https://hybrent.com',
    image: porfolioImage4,
  },
  {
    title: 'Paxintrade',
    description: '',
    url: 'https://paxintrade.com',
    image: porfolioImage5,
  },
  {
    title: 'TMC Motors',
    description: '',
    url: 'https://www.tmcmotors.co.uk/',
    image: porfolioImage6,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2011 - March 2016',
    location: 'University of Tokyo',
    title: "Bachelor's Degree",
    content: <p></p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'September 2021 - Present',
    location: 'Cosomil',
    title: 'Senior Software Engineer',
    content: (
      <>
        <p>
          - Leading professional growth of newcomers in JavaScript department
        </p>
        <p>
          - Performing R&D tasks on the projects to support incremental technology updates
        </p>
        <p>
          - Developing client side of web and mobile apps with React, Next.js, React Native and Redux
        </p>
        <p>
          - Developing server side web and mobile apps with Node.js/Express, Golang
        </p>
      </>
    ),
  },
  {
    date: 'December 2018 - September 2021',
    location: 'Yanekara',
    title: 'Fullstack Engineer',
    content: (
      <>
        <p>
          - Developing client side of web and mobile apps with React, React Native and Redux
        </p>
        <p>
          - Developing server side web and mobile apps with Django, FastAPI
        </p>
        <p>
          - Contributing to the Apollo Universal Starter Kit project
        </p>
      </>
    ),
  },
  {
    date: 'May 2017 - December 2018',
    location: 'CodLUCK Technology JSC',
    title: 'JavaScript Software Engineer',
    content: (
      <>
        <p>
          - Implementing client-side applications with React, Next.js, and Redux
        </p>
        <p>
          - Developing responsive user interfaces with Twitter Bootstrap and SCSS
        </p>
        <p>
          - Developing the event-driven client-side applications using WebSockets
        </p>
      </>
    ),
  },
  {
    date: 'November 2016 - May 2017',
    location: 'Computools',
    title: 'JavaScript Software Engineer',
    content: (
      <>
        <p>
          - Developing the event-driven client-side applications using the WebSocket API

        </p>
        <p>
          - Creating responsive web interfaces using Styled Components and LESS
        </p>
        <p>
          - Building client-side applications with React, Redux, and Saga
        </p>
      </>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'From Daniel lewis',
      text: 'Masaru was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client.',
      image: avatarImage1,
    },
    {
      name: 'From Teammate Dave',
      text: 'You debugged our SSL handshake failure in 20 minutes. I’d been stuck for 2 days. Code was clean, no ego. Just fixed it.',
      image: avatarImage2,
    },
    {
      name: 'From Junior Dev, Sandra',
      text: 'You didn’t just rewrite the spaghetti code. You whiteboarded why it broke for me after. I still use your notes.',
      image: avatarImage3,
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'Masaru.yamada9277@gmail.com',
      href: 'mailto:Masaru.yamada9277@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Tokyo, Japan',
      href: 'https://www.google.com/maps/@41.0605812,-73.5490425,3a,75y,170.29h,90.83t',
    },
    {
      type: ContactType.Github,
      text: 'elite-developer1055',
      href: 'https://github.com/blackhole-start',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
];

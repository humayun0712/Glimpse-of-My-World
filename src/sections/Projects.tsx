import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import AnimeVaultImage from '@/assets/images/anime_vault.png';
import ChatAppImage from '@/assets/images/chat_app.png';
import MovieStreamingApp from '@/assets/images/MovieStreaming.png';
import SushiManImage from '@/assets/images/sushi_man.png';

import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';

import Image from 'next/image';

const portfolioProjects = [
  {
    company: 'Coding Mission',
    year: '2023',
    title: 'Modern Sushi Website',
    results: [
      { title: 'Best User Experience on All Devices' },
      { title: 'Amazing animation using AOS' },
      { title: 'Responsive Design, Works on All Devices' },
    ],
    link: 'https://www.sushiman-jsm.netlify.app',
    image: SushiManImage,
  },
  {
    company: 'Personal Project',
    year: '2023',
    title: 'Anime Landing Page for Weebs',
    results: [
      { title: 'Used Next.js Server Side Rendering' },
      { title: 'Improved Performance by 20%' },
      { title: 'Unlimited Pagination' },
    ],
    link: 'https://animevault-jsm.netlify.app/',
    image: AnimeVaultImage,
  },
  {
    company: 'Dream Project',
    year: 'Upcoming',
    title: 'Movies Streaming Application',
    results: [
      { title: 'Utilized Native Android Frameworks' },
      { title: 'Clean Architecture' },
      { title: 'Complete Streaming Capabilities' },
    ],
    link: 'https://animevault-jsm.netlify.app/',
    image: MovieStreamingApp,
  },
  {
    company: 'Navodita Infotech',
    year: '2024',
    title: 'Backend Node.js Chatting App',
    results: [
      { title: 'Added Rooms for private and Conversations' },
      { title: 'Utilized Socket.io for Real-Time Chatting' },
      { title: 'Completely Documented Internship Project' },
    ],
    link: '',
    image: ChatAppImage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-World Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 bg-clip-text text-transparent">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((results) => (
                      <li
                        key={results.title}
                        className="flex gap-2 text-sm text-white/50 md:text-base"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{results.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto md:px-6">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

import CSSIcon from '@/assets/icons/css3.svg';
import GithubIcon from '@/assets/icons/github.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import ReactIcon from '@/assets/icons/react.svg';
import JavaScriptIcon from '@/assets/icons/square-js.svg';
import SmileEmoji from '@/assets/images/memoji-smile.png';
import MapImage from '@/assets/images/new_map_india.png';
import '../app/custom.css';

import Card from '@/components/Card';
import CardHeader from '@/components/CardHeader';
import SectionHeader from '@/components/SectionHeader';
import ToolboxItems from '@/components/ToolboxItems';
import Image from 'next/image';

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavaScriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS3',
    iconType: CSSIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
  {
    title: 'React Native',
    iconType: ReactIcon,
  },
];

const hobbies = [
  {
    title: 'Watching',
    emoji: '📺',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Sleeping',
    emoji: '😴',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '30%',
    top: '35%',
  },
  {
    title: 'Music',
    emoji: '🎧',
    left: '10%',
    top: '63%',
  },
  {
    title: 'Reading',
    emoji: '📖',
    left: '50%',
    top: '75%',
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about Who I am, What I do, and What inspires me."
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="book w-40 mx-auto mt-2 md:mt-0">
                <Image
                  width={80}
                  height={80}
                  alt="The Outstanding Developer by Sebastien Castiel"
                  src="https://m.media-amazon.com/images/I/51E2055ZGUL._SY466_.jpg"
                />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
              />
              <ToolboxItems items={toolboxItems} />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col col-span-3 lg:col-span-2">
              <CardHeader
                className="px-6 py-6"
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
              />
              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 col-span-3 lg:col-span-1">
              <Image
                src={MapImage}
                alt="My Location in Map"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image
                  src={SmileEmoji}
                  alt="My Smile Emoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

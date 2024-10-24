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
    title: 'Watching Anime',
    emoji: '📺',
  },
  {
    title: 'Sleeping',
    emoji: '😴',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
  },
  {
    title: 'Music',
    emoji: '🎧',
  },
  {
    title: 'Reading',
    emoji: '📖',
  },
];
export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about Who I am, What I do, and What inspires me."
        />

        <div className="mt-20">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives."
            />
            <div className="book w-40 mx-auto mt-8">
              <Image
                width={80}
                height={80}
                alt="The Outstanding Developer by Sebastien Castiel"
                src="https://m.media-amazon.com/images/I/51E2055ZGUL._SY466_.jpg"
              />
            </div>
          </Card>
          <Card className="h-[320px] p-0">
            <CardHeader
              className="px-6 pt-6"
              title="My Toolbox"
              description="Explore the technologies and tools I use to craft exceptional digital experiences."
            />
            <ToolboxItems items={toolboxItems} />
            <ToolboxItems items={toolboxItems} />
          </Card>
          <Card className="">
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital realm."
            />
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={MapImage} alt="My Location in Map" />
            <Image src={SmileEmoji} alt="My Smile Emoji" />
          </Card>
        </div>
      </div>
    </div>
  );
};

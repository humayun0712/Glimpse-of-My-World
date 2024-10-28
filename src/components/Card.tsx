import grainImage from '@/assets/images/grain.jpg';

import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

type CardProps = ComponentPropsWithoutRef<'div'>;

const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div
      {...props}
      className={twMerge(
        "bg-gray-800 rounded-3xl relative after:content-[''] after:absolute after:inset-0 z-0 after:z-10 overflow-hidden after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none",
        className
      )}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      {children}
    </div>
  );
};

export default Card;

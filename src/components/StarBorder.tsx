"use client";

import { ElementType, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface StarBorderProps {
  as?: ElementType;
  className?: string;
  color?: string;
  speed?: string;
  children: ReactNode;
}

const StarSVG = ({ color = "cyan" }: { color?: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="star-svg">
    <polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2" fill={color} />
  </svg>
);

const StarBorder = ({
  as: Component = "button",
  className = "",
  color = "cyan",
  speed = "5s",
  children,
}: StarBorderProps) => {
  return (
    <span className={twMerge("relative inline-block group", className)}>
      <Component className={twMerge("relative z-10 w-full h-full px-6 py-2 bg-transparent border-none outline-none", className)}>
        {children}
      </Component>
      {/* Animated Border */}
      <span
        className="pointer-events-none absolute inset-0 z-0 rounded-xl border-2"
        style={{
          borderColor: color,
          boxShadow: `0 0 12px 2px ${color}55`,
        }}
      ></span>
      {/* Animated Star */}
      <span
        className="pointer-events-none absolute z-20"
        style={{
          animation: `star-orbit ${speed} linear infinite`,
        }}
      >
        <StarSVG color={color} />
      </span>
      <style jsx>{`
        @keyframes star-orbit {
          0% {
            top: 0; left: 0;
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            top: 0; left: 100%;
            transform: translate(-100%, 0) rotate(90deg);
          }
          50% {
            top: 100%; left: 100%;
            transform: translate(-100%, -100%) rotate(180deg);
          }
          75% {
            top: 100%; left: 0;
            transform: translate(0, -100%) rotate(270deg);
          }
          100% {
            top: 0; left: 0;
            transform: translate(0, 0) rotate(360deg);
          }
        }
        .star-svg {
          filter: drop-shadow(0 0 6px ${color});
        }
      `}</style>
    </span>
  );
};

export default StarBorder; 
"use client";

import { ElementType, ReactNode, ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

type StarBorderProps<T extends ElementType = "button"> = {
  as?: T;
  className?: string;
  color?: string;
  speed?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

const StarBorder = <T extends ElementType = "button">({
  as,
  className = "",
  color = "#06b6d4", // default cyan
  speed = "2s",
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || "button";
  return (
    <span className={twMerge("relative inline-block group", className)}>
      <Component className={twMerge("relative z-10 w-full h-full px-6 py-2 bg-transparent border-none outline-none", className)} {...rest}>
        {children}
      </Component>
      {/* 3D Animated Gradient Border */}
      <span
        className="pointer-events-none absolute inset-0 z-0 rounded-xl border-2 border-transparent group-hover:border-transparent before:absolute before:inset-0 before:rounded-xl before:border-2 before:border-transparent before:bg-gradient-to-r before:from-emerald-400 before:via-cyan-400 before:to-emerald-400 before:blur-sm before:opacity-80 before:transition-opacity before:duration-300 before:content-[''] before:z-[-1] before:animate-border-shine"
        style={{
          boxShadow: `0 0 12px 2px ${color}55`,
          animationDuration: speed,
        }}
      ></span>
      <style jsx>{`
        @keyframes border-shine {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .group:hover .before\:animate-border-shine::before {
          opacity: 1;
        }
        .before\:animate-border-shine::before {
          background-size: 200% 200%;
          animation: border-shine ${speed} linear infinite;
          opacity: 0.8;
        }
      `}</style>
    </span>
  );
};

export default StarBorder; 
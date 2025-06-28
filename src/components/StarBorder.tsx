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
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || "button";
  return (
    <span className={twMerge("relative inline-block group", className)}>
      <Component className={twMerge("relative z-10 w-full h-full px-6 py-2 bg-transparent border-none outline-none", className)} {...rest}>
        {children}
      </Component>
      {/* Simple Static Border */}
      <span
        className="pointer-events-none absolute inset-0 z-0 rounded-xl border-2"
        style={{
          borderColor: color,
        }}
      ></span>
    </span>
  );
};

export default StarBorder; 
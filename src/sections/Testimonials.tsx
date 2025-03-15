import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import React from "react";

const testimonials = [
  {
    name: "Ch. V Murali Krishna",
    position: "HOD, NRI Institute of Technology",
    text: "A dedicated and innovative student with exceptional problem-solving skills. His work demonstrates a deep understanding of modern technologies.",
    avatar: memojiAvatar1,
  },
  {
    name: "Dr. Jannu Chaitanya",
    position: "Professor, NRI Institute of Technology",
    text: "An outstanding student who consistently demonstrates excellence in both academic and practical applications of technology.",
    avatar: memojiAvatar2,
  },
  {
    name: "Tanooj Puppala",
    position: "Partner In Crime",
    text: "Working with Vijay has been a great experience. His attention to detail and technical expertise are truly impressive.",
    avatar: memojiAvatar3,
  },
  {
    name: "Madhusudhan Rao",
    position: "Dev Companion",
    text: "Vijay's ability to grasp complex concepts and implement innovative solutions makes him a valuable asset to any team.",
    avatar: memojiAvatar1,
  },
  {
    name: "R Yash Raj",
    position: "Class mate",
    text: "Exceptional work ethic and technical skills. Vijay consistently delivers high-quality results and maintains excellent communication.",
    avatar: memojiAvatar5,
  }
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Buddies & Brawls"
          title="What People Say About Me"
          description="Hear from professors and friends about their experiences working with me."
        />
        <div className="-my-4 mt-12 flex overflow-x-clip py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] lg:mt-20">
          <div className="flex flex-none animate-move-left gap-8 pr-8 [animation-duration:90s] hover:[animation-play-state:paused]">
            {...new Array(2).fill(0).map((_, i) => (
              <React.Fragment key={i}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs p-6 transition duration-300 hover:-rotate-3 md:max-w-md md:p-8"
                  >
                    <div className="flex items-center gap-4">
                      <div className="inline-flex size-14 flex-shrink-0 items-center justify-center rounded-full bg-gray-700">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm md:mt-6 md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

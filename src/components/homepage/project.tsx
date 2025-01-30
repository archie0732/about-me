'use client';
import { Github } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { ProjectAPIData } from '@/app/api/_model/apitype';

import { Button } from '../ui/button';

export function ProjectDisplay({ project }: ProjectAPIData) {
  const router = useRouter();
  return (
    <div className={`
      relative min-h-[800px] rounded-md bg-gray-400/20 p-4
      md:min-h-[420px]
    `}
    >
      <div className={`
        grid grid-cols-2 gap-4
        md:grid-cols-3
      `}
      >
        {
          project.slice(0, 6).map((p, i) => (
            <div
              key={`project-${i}`}
              className={`
                group rounded-md border border-gray-800 bg-slate-600 p-4
                text-white transition-all duration-100
                dark:border-white dark:text-black
                hover:translate-x-1 hover:scale-105 hover:border-2
                hover:shadow-md
              `}
              onClick={() => void router.push(p.link)}
            >
              <div className={`
                flex text-lg font-bold text-white transition-all duration-100
                group-hover:underline group-hover:underline-offset-2
              `}
              >
                <Github className="mr-2" />
                {p.name}
              </div>
              <div className={`
                flex items-center gap-2 p-1 transition-all duration-100
              `}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://avatars.githubusercontent.com/u/121162902?v=4"
                  className="h-6 w-6 rounded-full border border-white"
                />
                <span className="text-gray-400">archie0732</span>
              </div>

              <div className={`
                mt-3 flex translate-x-1 items-end text-gray-400 transition-all
                duration-100
              `}
              >
                {
                  p.description
                }
              </div>
            </div>
          ))
        }

      </div>

      <div className={`
        absolute bottom-1 left-0 right-0 flex justify-center p-2
        md:mt-10
      `}
      >
        <div className="flex gap-2">
          <Button variant="aaa">{'<'}</Button>
          <Button variant="aaa">{'>'}</Button>
        </div>
      </div>
      <Image
        src="/image/_04.png"
        alt="project-image"
        height={100}
        width={100}
        className="absolute bottom-0.5 right-0"
      />
    </div>
  );
}

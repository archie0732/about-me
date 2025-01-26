import Image from 'next/image';
import Link from 'next/link';
import { LinkIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SocialMedia } from '@/components/homepage/social-media';

import { ProfileAPIData } from './api/_model/apitype';

export default async function Home() {
  const response = await fetch(`http://localhost:3000/api/profile`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json() as ProfileAPIData;

  return (
    <div className="m-4">
      <span className={`
        flex justify-center text-xl font-bold
        md:p-8
      `}
      >
        archie 阿祁
      </span>

      <div className={`
        ml-4 mr-4 mt-2 grid grid-cols-1 gap-4 overflow-hidden rounded-md
        bg-gray-400/20
        md:grid-cols-[1.2fr_1.2fr_1.6fr]
      `}
      >
        <div className={`
          mt-12 flex justify-center
          md:col-span-1
        `}
        >
          <div className="flex flex-col justify-center gap-4">
            <Image
              src="/user/8.jpg"
              alt="avatar"
              height={80}
              width={80}
              className={`
                ml-5 h-20 w-20 rounded-full border-4 border-indigo-500
                object-cover
                md:ml-0 md:h-32 md:w-32
              `}
            />
            <span className={`
              text-center text-lg text-gray-400
              md:text-xl
            `}
            >
              @archie0732
            </span>
            <SocialMedia data={data} />
          </div>
        </div>

        <div className={`
          flex flex-col gap-4 pl-4
          md:col-span-1 md:mt-8
        `}
        >
          <span className="text-xl font-bold">About me ✦</span>
          <ul className="list-disc pl-8 text-gray-500">
            {data.description.map((d, index) => (
              <li key={index}>{d}</li>
            ))}
          </ul>
          <span className="mt-5 text-xl font-bold">My Project ✦</span>
          {data.project.map((p, i) => (
            <Link
              href={p.link}
              key={i}
              className={`
                group flex flex-col rounded-md transition-all duration-300
                hover:scale-105 hover:border hover:border-gray-400
                hover:shadow-md
              `}
            >
              <span className={`
                flex items-center gap-1 transition-all duration-300
                group-hover:translate-x-1
              `}
              >
                <LinkIcon size={10} />
                {p.name}
              </span>
              <span className={`
                pl-4 text-sm text-gray-500 transition-all duration-300
                group-hover:pl-5 group-hover:text-gray-700
              `}
              >
                {p.description}
              </span>
            </Link>
          ))}
          <Link
            href={data.social_media.github.link}
            className="flex justify-end"
          >
            <Button
              variant="secondary"
              className={`
                hidden
                md:flex
              `}
            >
              查看更多
            </Button>
          </Link>
        </div>

        <div className={`
          relative max-h-64 w-full items-center justify-end overflow-hidden
          md:order-none md:flex md:h-full md:max-h-none md:w-full
        `}
        >
          <Image
            src="/image/_02.png"
            alt="ayaka"
            width={800}
            height={800}
            className={`
              w-full object-cover object-top
              md:h-full md:w-80 md:object-center
            `}
          />
        </div>
      </div>
    </div>
  );
}

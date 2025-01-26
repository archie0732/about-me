import { Instagram, LucideGithub } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { ProfileAPIData } from '@/app/api/_model/apitype';

interface SocialMediaProps {
  data: ProfileAPIData;
}

export function SocialMedia({ data }: SocialMediaProps) {
  return (
    <div className={`
      flex items-center justify-center gap-4
      md:mt-5
    `}
    >
      <Link href={data.social_media.instagram.link}>
        <Instagram size={30} />
      </Link>
      <Link
        href={data.social_media.github.link}
      >
        <LucideGithub size={30} />
      </Link>

      <Link href={data.social_media.discord.link}>
        <Image
          src="/discord.svg"
          alt="discord"
          width={30}
          height={30}
          className={`
            h-35 w-35
            dark:invert
          `}
        />
      </Link>
    </div>
  );
}

export interface ProfileAPIData {
  nick_name: string;
  avatar: string;
  favorite_character: {
    name: string;
    avatar: string;
    description: string;
  }[];
  description: string[];
  project: {
    name: string;
    description: string;
    link: string;
  }[];
  social_media: {
    instagram: {
      username: string;
      link: string;
    };
    github: {
      username: string;
      link: string;
    };
    discord: {
      username: string;
      link: string;
    };
    x: {
      username: string;
      link: string;
    };
  };
  final_update: string;
}

export interface ProjectAPIData {
  project: {
    name: string;
    description: string;
    link: string;
  }[];
}

export interface AnimeAPIData {
  character: {
    name: string;
    en_name: string;
    anime_source: string;
    description: string;
  }[];
}

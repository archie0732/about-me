import { readFileSync } from 'fs';
import { resolve } from 'path';

import { AnimeAPIData } from '../_model/apitype';

let time = 0, cache: null | AnimeAPIData = null;

export const GET = () => {
  const now = Date.now();

  if (cache && now - time < 600_000) {
    return Response.json(cache, { status: 200 });
  }

  const path = resolve('src', 'data', 'anime-character.json');
  const json = JSON.parse(readFileSync(path, 'utf-8')) as AnimeAPIData;

  time = now;
  cache = json;

  return Response.json(json, { status: 200 });
};

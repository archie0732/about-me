import { readFileSync } from 'fs';
import { resolve } from 'path';

import { ProjectAPIData } from '../_model/apitype';

let time = 0, cache: ProjectAPIData | null = null;

export const GET = () => {
  const now = Date.now();

  if (cache && now - time < 600_000) {
    return Response.json(cache, { status: 200 });
  }

  const json = JSON.parse(readFileSync(resolve('src', 'data', 'project.json'), 'utf-8')) as ProjectAPIData;

  time = now;
  cache = json;

  return Response.json(json, { status: 200 });
};

import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

import { ProfileAPIData } from '../_model/apitype';

let time = 0, cache: ProfileAPIData | null = null;

export function GET() {
  const path = resolve('src', 'data', 'profile.json');

  const now = Date.now();

  if ((now - time) < 600_000 && cache) {
    return Response.json(cache);
  }

  if (!existsSync(path)) {
    return Response.json('data path error', { status: 500 });
  }

  const data = JSON.parse(readFileSync(path, 'utf-8')) as ProfileAPIData;

  time = now;
  cache = data;

  return Response.json(data);
}

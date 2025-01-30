const a = ['aaaaa', 'bbbbb', 'ccccc'];

export function AnimeDemo() {
  return (
    <div className="m-5 grid min-h-[500px] grid-cols-4 gap-5 p-10">
      <div className="col-start-1 col-end-2 flex flex-col gap-4">
        {
          a.map((p, i) => (
            <div className="w-full rounded-3xl border p-4" key={i}>
              <div className="flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://papers.co/wallpaper/papers.co-bl84-art-anime-girl-white-cry-1-wallpaper.jpg"
                  className="h-10 w-10 rounded-md object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-bold">
                    {
                      p
                    }
                  </span>
                  <span className="text-sm text-gray-400">
                    genshin impact
                  </span>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div>
        <span>aaaaa</span>
      </div>
    </div>
  );
}

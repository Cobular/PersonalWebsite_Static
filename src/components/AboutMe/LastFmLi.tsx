import { useEffect, useState } from "react";

interface NowPlayingData {
  artist: string;
  track: string;
  playing: boolean;
  url: string | undefined;
}

export function LastFmLi() {
  const [nowPlayingData, setNowPlayingData] = useState<NowPlayingData>({
    artist: "nobody",
    playing: false,
    track: "nothing",
    url: undefined,
  });

  async function updateNowPlaying() {
    try {
      const songRequestData = await fetch("https://api.cobular.com/graphql", {
        body: JSON.stringify({
          query: `
query {
  nowPlaying {
    track {
      ... on Track {
        title
        artists {
          name
        }
        link
      }
    }
  }
}

      `,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Dnt: "1",
        },
        method: "POST",
      });
      const data: any = await songRequestData.json();
      setNowPlayingData({
        playing: true,
        artist: data["data"]["nowPlaying"]["track"]["artists"][0]["name"],
        track: data["data"]["nowPlaying"]["track"]["title"],
        url: data["data"]["nowPlaying"]["track"]["link"],
      });
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    updateNowPlaying();

    const interval = setInterval(updateNowPlaying, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (nowPlayingData.playing) {
    return (
      <li id={"now-playing"}>
        listening to{" "}
        <a href={nowPlayingData.url} target={"_blank"} rel="noreferrer">
          {nowPlayingData.track} by {nowPlayingData.artist}
        </a>
      </li>
    );
  }
  return <li>not listening to anything right now. <br/></li>;
}

import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {
  requestArtistVideos,
  selectVideos,
  videoLoading
} from '../artistsSlice';
import loadingGIF from '../images/loading-animation.gif';
import SharedButton from './Button';
import { Input } from 'antd';

export function ArtistVideos() {

  // artist videos
  const artistVideos = useAppSelector(selectVideos) as any[];
  const [artistId, setArtistId] = useState('');
  const sendArtistId = Object(artistId) || [];

  const dispatch = useAppDispatch();

  // loading logic
  const [vidsToLoad, setVidsToLoad] = useState(0);
  const [loadingIFrames, setLoadingIFrames] = useState(false);

  let loading = useAppSelector(videoLoading) as string;

  if (loading === "loading" && loadingIFrames) {
    setLoadingIFrames(false);
  }

  if (loading === "idle" && loadingIFrames === false && artistVideos?.length > 0) {
    setLoadingIFrames(true);
    setVidsToLoad(artistVideos.length);
  }

  // helper 
  function handleVideoClick() {
    dispatch(requestArtistVideos(sendArtistId));
  }

  function refreshPage() {
    window.location.reload();
  }

  // rendering
  if (artistVideos === null) {
    return (
      <div>
        <p className="outta-luck">guess you're outta luck!</p>
        <SharedButton
          text="Try again!"
          onClick={refreshPage}
        />
      </div>
    );
  }

  const videos = artistVideos.map((item: any) => {
    console.log(item)
    return (
      <div key={item.idTrack}>
        <p className="track-name">{item.strTrack}</p>
        <iframe
          onLoad={() => setVidsToLoad(vidsToLoad - 1)}
          title={`${item.strTrack}`}
          width="420"
          height="315"
          src={`${item.strMusicVid.replace('watch?v=', 'embed/')}`}
        >
        </iframe>
      </div>
    );
  })

  return (
    <div>
      <div>
        <Input
          size='large'
          style={{ width: '28%' }}
          aria-label="Set artist ID"
          value={artistId}
          onChange={(e) => setArtistId(e.target.value)}
          placeholder="give me a 2-integer value!!! (don't ask, just do it)"
        />
        <SharedButton
          text="Get me some VIDZ!"
          onClick={handleVideoClick}
        />
      </div>
      <div>
        <a href="/search-by-artist-name">
          <SharedButton
            text="This is silly... lemme get som artist info!"
            onClick={""}
          />
        </a>
      </div>
      { vidsToLoad > 0
        ? <img src={loadingGIF} alt="loading animation"></img>
        : null}
      <div
        className={"videos" + (vidsToLoad > 0 ? " display-none" : '')}>
        {videos}
      </div>
    </div>
  );
}

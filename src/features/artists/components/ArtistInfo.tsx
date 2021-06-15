import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {
  requestArtistInfo,
  selectInfo,
  infoLoading
} from '../artistsSlice';
import SharedButton from './Button';
import loadingGIF from '../images/loading-animation.gif';
import { Input } from 'antd';


export function ArtistInfo() {

  // artist info
  const artistInfo = useAppSelector(selectInfo) as any;
  const [artistName, setArtistName] = useState('');
  const sendArtistName = Object(artistName) || [];

  // loading status
  let loading = useAppSelector(infoLoading) as string;

  const dispatch = useAppDispatch();

  // helpers
  function handleInfoClick() {
    dispatch(requestArtistInfo(sendArtistName));
  }

  function refreshPage() {
    window.location.reload();
  }

  // rendering
  if (loading === "loading") {
    return <img src={loadingGIF} alt="loading animation"></img>;
  }

  if (artistInfo === undefined) {
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

  return (
    <div>
      <div >
        <Input
          size='large'
          style={{ width: '20%' }}
          aria-label="Set artist name"
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
          placeholder="give me an artist name!!!"
        />
        <SharedButton
          text="Get me some artist info!"
          onClick={handleInfoClick}
        />
      </div>
      <div>
        <a href="/">
          <SharedButton
            text="This is silly... get me some VIDZ!"
            onClick={""}
          />
        </a>
      </div>
      <div>
        <p className="artist-name">{artistInfo.strArtist}</p>
        {artistInfo.strArtistBanner 
        ? <img src={`${artistInfo.strArtistBanner}`} alt='artist banner' ></img> 
        : null}
        <div className="artist-description">
          <p>{artistInfo.strBiographyEN}</p>
        </div>
      </div>
    </div>
  );
}

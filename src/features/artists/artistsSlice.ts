import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { createArtistVideoApiRequest, createArtistInfoApiRequest } from './artistsAPI';

export interface ArtistState {
  videos: object;
  videoStatus: 'idle' | 'loading' | 'failed';
  artistInfo: object;
  infoStatus: 'idle' | 'loading' | 'failed';
}

const initialState: ArtistState = {
  videos: [],
  videoStatus: 'idle',
  artistInfo: [],
  infoStatus: 'idle'
};


export const requestArtistVideos = createAsyncThunk(
  'artists/createArtistVideoApiRequest',
  async (artistId: number) => {
    const response = await createArtistVideoApiRequest(artistId);
    return response;
  }
);

export const requestArtistInfo = createAsyncThunk(
  'artists/createArtistInfoApiRequest',
  async (artistName: string) => {
    const response = await createArtistInfoApiRequest(artistName);
    return response;
  }
);

export const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {
    getArtistVidsById: (state, action: PayloadAction<object>) => {
      state.videos = action.payload;
    },
    getArtisInfoByName: (state, action: PayloadAction<object>) => {
      state.artistInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestArtistVideos.pending, (state) => {
        state.videoStatus = 'loading';
        state.videos = [];
      })
      .addCase(requestArtistVideos.fulfilled, (state, action) => {
        state.videoStatus = 'idle';
        state.videos = action.payload;
      })
      .addCase(requestArtistInfo.pending, (state) => {
        state.infoStatus = 'loading';
      })
      .addCase(requestArtistInfo.fulfilled, (state, action) => {
        state.infoStatus = 'idle';
        state.artistInfo = action.payload;
      });
  },
});

export const { getArtistVidsById } = artistSlice.actions;
export const selectVideos = (state: RootState) => state.artists.videos;
export const videoLoading = (state: RootState) => state.artists.videoStatus;
export const selectInfo = (state: RootState) => state.artists.artistInfo;
export const infoLoading = (state: RootState) => state.artists.infoStatus;

export default artistSlice.reducer;

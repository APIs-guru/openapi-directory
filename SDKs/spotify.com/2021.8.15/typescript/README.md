# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { EndpointGetAnAlbumRequest, EndpointGetAnAlbumResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: EndpointGetAnAlbumRequest = {
  security: {
    spotifyAuth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    id: "atque",
  },
  queryParams: {
    market: "aliquid",
  },
  headers: {
    authorization: "itaque",
  },
};

sdk.categoryAlbums.endpointGetAnAlbum(req).then((res: EndpointGetAnAlbumResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### category-albums

* `endpointGetAnAlbum` - Get an Album
* `endpointGetAnAlbumsTracks` - Get an Album's Tracks
* `endpointGetMultipleAlbums` - Get Multiple Albums

### category-artists

* `endpointGetAnArtist` - Get an Artist
* `endpointGetAnArtistsAlbums` - Get an Artist's Albums
* `endpointGetAnArtistsRelatedArtists` - Get an Artist's Related Artists
* `endpointGetAnArtistsTopTracks` - Get an Artist's Top Tracks
* `endpointGetMultipleArtists` - Get Multiple Artists

### category-browse

* `endpointGetACategoriesPlaylists` - Get a Category's Playlists
* `endpointGetACategory` - Get a Category
* `endpointGetCategories` - Get All Categories
* `endpointGetFeaturedPlaylists` - Get All Featured Playlists
* `endpointGetNewReleases` - Get All New Releases
* `endpointGetRecommendationGenres` - Get Recommendation Genres
* `endpointGetRecommendations` - Get Recommendations

### category-episodes

* `endpointGetAnEpisode` - Get an Episode
* `endpointGetMultipleEpisodes` - Get Multiple Episodes

### category-follow

* `endpointCheckCurrentUserFollows` - Get Following State for Artists/Users
* `endpointCheckIfUserFollowsPlaylist` - Check if Users Follow a Playlist
* `endpointFollowArtistsUsers` - Follow Artists or Users
* `endpointFollowPlaylist` - Follow a Playlist
* `endpointGetFollowed` - Get User's Followed Artists
* `endpointUnfollowArtistsUsers` - Unfollow Artists or Users
* `endpointUnfollowPlaylist` - Unfollow Playlist

### category-library

* `endpointCheckUsersSavedAlbums` - Check User's Saved Albums
* `endpointCheckUsersSavedEpisodes` - Check User's Saved Episodes
* `endpointCheckUsersSavedShows` - Check User's Saved Shows
* `endpointCheckUsersSavedTracks` - Check User's Saved Tracks
* `endpointGetUsersSavedAlbums` - Get User's Saved Albums
* `endpointGetUsersSavedEpisodes` - Get User's Saved Episodes
* `endpointGetUsersSavedShows` - Get User's Saved Shows
* `endpointGetUsersSavedTracks` - Get User's Saved Tracks
* `endpointRemoveAlbumsUser` - Remove Albums for Current User
* `endpointRemoveEpisodesUser` - Remove User's Saved Episodes
* `endpointRemoveShowsUser` - Remove User's Saved Shows
* `endpointRemoveTracksUser` - Remove User's Saved Tracks
* `endpointSaveAlbumsUser` - Save Albums for Current User
* `endpointSaveEpisodesUser` - Save Episodes for User
* `endpointSaveShowsUser` - Save Shows for Current User
* `endpointSaveTracksUser` - Save Tracks for User

### category-markets

* `endpointGetAvailableMarkets` - Get Available Markets

### category-personalization

* `endpointGetUsersTopArtistsAndTracks` - Get a User's Top Artists and Tracks

### category-player

* `endpointAddToQueue` - Add an item to queue
* `endpointGetAUsersAvailableDevices` - Get a User's Available Devices
* `endpointGetInformationAboutTheUsersCurrentPlayback` - Get Information About The User's Current Playback
* `endpointGetRecentlyPlayed` - Get Current User's Recently Played Tracks
* `endpointGetTheUsersCurrentlyPlayingTrack` - Get the User's Currently Playing Track
* `endpointPauseAUsersPlayback` - Pause a User's Playback
* `endpointSeekToPositionInCurrentlyPlayingTrack` - Seek To Position In Currently Playing Track
* `endpointSetRepeatModeOnUsersPlayback` - Set Repeat Mode On User’s Playback
* `endpointSetVolumeForUsersPlayback` - Set Volume For User's Playback
* `endpointSkipUsersPlaybackToNextTrack` - Skip User’s Playback To Next Track
* `endpointSkipUsersPlaybackToPreviousTrack` - Skip User’s Playback To Previous Track
* `endpointStartAUsersPlayback` - Start/Resume a User's Playback
* `endpointToggleShuffleForUsersPlayback` - Toggle Shuffle For User’s Playback
* `endpointTransferAUsersPlayback` - Transfer a User's Playback

### category-playlists

* `endpointAddTracksToPlaylist` - Add Items to a Playlist
* `endpointChangePlaylistDetails` - Change a Playlist's Details
* `endpointCreatePlaylist` - Create a Playlist
* `endpointGetAListOfCurrentUsersPlaylists` - Get a List of Current User's Playlists
* `endpointGetListUsersPlaylists` - Get a List of a User's Playlists
* `endpointGetPlaylist` - Get a Playlist
* `endpointGetPlaylistCover` - Get a Playlist Cover Image
* `endpointGetPlaylistsTracks` - Get a Playlist's Items
* `endpointRemoveTracksPlaylist` - Remove Items from a Playlist
* `endpointReorderOrReplacePlaylistsTracks` - Reorder or Replace a Playlist's Items
* `endpointUploadCustomPlaylistCover` - Upload a Custom Playlist Cover Image

### category-search

* `endpointSearch` - Search for an Item

### category-shows

* `endpointGetAShow` - Get a Show
* `endpointGetAShowsEpisodes` - Get a Show's Episodes
* `endpointGetMultipleShows` - Get Multiple Shows

### category-tracks

* `endpointGetAudioAnalysis` - Get Audio Analysis for a Track
* `endpointGetAudioFeatures` - Get Audio Features for a Track
* `endpointGetSeveralAudioFeatures` - Get Audio Features for Several Tracks
* `endpointGetSeveralTracks` - Get Several Tracks
* `endpointGetTrack` - Get a Track

### category-users-profile

* `endpointGetCurrentUsersProfile` - Get Current User's Profile
* `endpointGetUsersProfile` - Get a User's Profile

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

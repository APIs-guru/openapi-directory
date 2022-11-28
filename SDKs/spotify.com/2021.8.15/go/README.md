# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.EndpointGetAnAlbumRequest{
        Security: operations.EndpointGetAnAlbumSecurity{
            SpotifyAuth: shared.SchemeSpotifyAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.EndpointGetAnAlbumPathParams{
            ID: "atque",
        },
        QueryParams: operations.EndpointGetAnAlbumQueryParams{
            Market: "aliquid",
        },
        Headers: operations.EndpointGetAnAlbumHeaders{
            Authorization: "itaque",
        },
    }
    
    res, err := s.CategoryAlbums.EndpointGetAnAlbum(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AlbumObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### category-albums

* `EndpointGetAnAlbum` - Get an Album
* `EndpointGetAnAlbumsTracks` - Get an Album's Tracks
* `EndpointGetMultipleAlbums` - Get Multiple Albums

### category-artists

* `EndpointGetAnArtist` - Get an Artist
* `EndpointGetAnArtistsAlbums` - Get an Artist's Albums
* `EndpointGetAnArtistsRelatedArtists` - Get an Artist's Related Artists
* `EndpointGetAnArtistsTopTracks` - Get an Artist's Top Tracks
* `EndpointGetMultipleArtists` - Get Multiple Artists

### category-browse

* `EndpointGetACategoriesPlaylists` - Get a Category's Playlists
* `EndpointGetACategory` - Get a Category
* `EndpointGetCategories` - Get All Categories
* `EndpointGetFeaturedPlaylists` - Get All Featured Playlists
* `EndpointGetNewReleases` - Get All New Releases
* `EndpointGetRecommendationGenres` - Get Recommendation Genres
* `EndpointGetRecommendations` - Get Recommendations

### category-episodes

* `EndpointGetAnEpisode` - Get an Episode
* `EndpointGetMultipleEpisodes` - Get Multiple Episodes

### category-follow

* `EndpointCheckCurrentUserFollows` - Get Following State for Artists/Users
* `EndpointCheckIfUserFollowsPlaylist` - Check if Users Follow a Playlist
* `EndpointFollowArtistsUsers` - Follow Artists or Users
* `EndpointFollowPlaylist` - Follow a Playlist
* `EndpointGetFollowed` - Get User's Followed Artists
* `EndpointUnfollowArtistsUsers` - Unfollow Artists or Users
* `EndpointUnfollowPlaylist` - Unfollow Playlist

### category-library

* `EndpointCheckUsersSavedAlbums` - Check User's Saved Albums
* `EndpointCheckUsersSavedEpisodes` - Check User's Saved Episodes
* `EndpointCheckUsersSavedShows` - Check User's Saved Shows
* `EndpointCheckUsersSavedTracks` - Check User's Saved Tracks
* `EndpointGetUsersSavedAlbums` - Get User's Saved Albums
* `EndpointGetUsersSavedEpisodes` - Get User's Saved Episodes
* `EndpointGetUsersSavedShows` - Get User's Saved Shows
* `EndpointGetUsersSavedTracks` - Get User's Saved Tracks
* `EndpointRemoveAlbumsUser` - Remove Albums for Current User
* `EndpointRemoveEpisodesUser` - Remove User's Saved Episodes
* `EndpointRemoveShowsUser` - Remove User's Saved Shows
* `EndpointRemoveTracksUser` - Remove User's Saved Tracks
* `EndpointSaveAlbumsUser` - Save Albums for Current User
* `EndpointSaveEpisodesUser` - Save Episodes for User
* `EndpointSaveShowsUser` - Save Shows for Current User
* `EndpointSaveTracksUser` - Save Tracks for User

### category-markets

* `EndpointGetAvailableMarkets` - Get Available Markets

### category-personalization

* `EndpointGetUsersTopArtistsAndTracks` - Get a User's Top Artists and Tracks

### category-player

* `EndpointAddToQueue` - Add an item to queue
* `EndpointGetAUsersAvailableDevices` - Get a User's Available Devices
* `EndpointGetInformationAboutTheUsersCurrentPlayback` - Get Information About The User's Current Playback
* `EndpointGetRecentlyPlayed` - Get Current User's Recently Played Tracks
* `EndpointGetTheUsersCurrentlyPlayingTrack` - Get the User's Currently Playing Track
* `EndpointPauseAUsersPlayback` - Pause a User's Playback
* `EndpointSeekToPositionInCurrentlyPlayingTrack` - Seek To Position In Currently Playing Track
* `EndpointSetRepeatModeOnUsersPlayback` - Set Repeat Mode On User’s Playback
* `EndpointSetVolumeForUsersPlayback` - Set Volume For User's Playback
* `EndpointSkipUsersPlaybackToNextTrack` - Skip User’s Playback To Next Track
* `EndpointSkipUsersPlaybackToPreviousTrack` - Skip User’s Playback To Previous Track
* `EndpointStartAUsersPlayback` - Start/Resume a User's Playback
* `EndpointToggleShuffleForUsersPlayback` - Toggle Shuffle For User’s Playback
* `EndpointTransferAUsersPlayback` - Transfer a User's Playback

### category-playlists

* `EndpointAddTracksToPlaylist` - Add Items to a Playlist
* `EndpointChangePlaylistDetails` - Change a Playlist's Details
* `EndpointCreatePlaylist` - Create a Playlist
* `EndpointGetAListOfCurrentUsersPlaylists` - Get a List of Current User's Playlists
* `EndpointGetListUsersPlaylists` - Get a List of a User's Playlists
* `EndpointGetPlaylist` - Get a Playlist
* `EndpointGetPlaylistCover` - Get a Playlist Cover Image
* `EndpointGetPlaylistsTracks` - Get a Playlist's Items
* `EndpointRemoveTracksPlaylist` - Remove Items from a Playlist
* `EndpointReorderOrReplacePlaylistsTracks` - Reorder or Replace a Playlist's Items
* `EndpointUploadCustomPlaylistCover` - Upload a Custom Playlist Cover Image

### category-search

* `EndpointSearch` - Search for an Item

### category-shows

* `EndpointGetAShow` - Get a Show
* `EndpointGetAShowsEpisodes` - Get a Show's Episodes
* `EndpointGetMultipleShows` - Get Multiple Shows

### category-tracks

* `EndpointGetAudioAnalysis` - Get Audio Analysis for a Track
* `EndpointGetAudioFeatures` - Get Audio Features for a Track
* `EndpointGetSeveralAudioFeatures` - Get Audio Features for Several Tracks
* `EndpointGetSeveralTracks` - Get Several Tracks
* `EndpointGetTrack` - Get a Track

### category-users-profile

* `EndpointGetCurrentUsersProfile` - Get Current User's Profile
* `EndpointGetUsersProfile` - Get a User's Profile

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

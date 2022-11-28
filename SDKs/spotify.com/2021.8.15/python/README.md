# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.EndpointGetAnAlbumRequest(
    security=operations.EndpointGetAnAlbumSecurity(
        spotify_auth=shared.SchemeSpotifyAuth(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.EndpointGetAnAlbumPathParams(
        id="atque",
    ),
    query_params=operations.EndpointGetAnAlbumQueryParams(
        market="aliquid",
    ),
    headers=operations.EndpointGetAnAlbumHeaders(
        authorization="itaque",
    ),
)
    
res = s.category_albums.endpoint_get_an_album(req)

if res.album_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### category-albums

* `endpoint_get_an_album` - Get an Album
* `endpoint_get_an_albums_tracks` - Get an Album's Tracks
* `endpoint_get_multiple_albums` - Get Multiple Albums

### category-artists

* `endpoint_get_an_artist` - Get an Artist
* `endpoint_get_an_artists_albums` - Get an Artist's Albums
* `endpoint_get_an_artists_related_artists` - Get an Artist's Related Artists
* `endpoint_get_an_artists_top_tracks` - Get an Artist's Top Tracks
* `endpoint_get_multiple_artists` - Get Multiple Artists

### category-browse

* `endpoint_get_a_categories_playlists` - Get a Category's Playlists
* `endpoint_get_a_category` - Get a Category
* `endpoint_get_categories` - Get All Categories
* `endpoint_get_featured_playlists` - Get All Featured Playlists
* `endpoint_get_new_releases` - Get All New Releases
* `endpoint_get_recommendation_genres` - Get Recommendation Genres
* `endpoint_get_recommendations` - Get Recommendations

### category-episodes

* `endpoint_get_an_episode` - Get an Episode
* `endpoint_get_multiple_episodes` - Get Multiple Episodes

### category-follow

* `endpoint_check_current_user_follows` - Get Following State for Artists/Users
* `endpoint_check_if_user_follows_playlist` - Check if Users Follow a Playlist
* `endpoint_follow_artists_users` - Follow Artists or Users
* `endpoint_follow_playlist` - Follow a Playlist
* `endpoint_get_followed` - Get User's Followed Artists
* `endpoint_unfollow_artists_users` - Unfollow Artists or Users
* `endpoint_unfollow_playlist` - Unfollow Playlist

### category-library

* `endpoint_check_users_saved_albums` - Check User's Saved Albums
* `endpoint_check_users_saved_episodes` - Check User's Saved Episodes
* `endpoint_check_users_saved_shows` - Check User's Saved Shows
* `endpoint_check_users_saved_tracks` - Check User's Saved Tracks
* `endpoint_get_users_saved_albums` - Get User's Saved Albums
* `endpoint_get_users_saved_episodes` - Get User's Saved Episodes
* `endpoint_get_users_saved_shows` - Get User's Saved Shows
* `endpoint_get_users_saved_tracks` - Get User's Saved Tracks
* `endpoint_remove_albums_user` - Remove Albums for Current User
* `endpoint_remove_episodes_user` - Remove User's Saved Episodes
* `endpoint_remove_shows_user` - Remove User's Saved Shows
* `endpoint_remove_tracks_user` - Remove User's Saved Tracks
* `endpoint_save_albums_user` - Save Albums for Current User
* `endpoint_save_episodes_user` - Save Episodes for User
* `endpoint_save_shows_user` - Save Shows for Current User
* `endpoint_save_tracks_user` - Save Tracks for User

### category-markets

* `endpoint_get_available_markets` - Get Available Markets

### category-personalization

* `endpoint_get_users_top_artists_and_tracks` - Get a User's Top Artists and Tracks

### category-player

* `endpoint_add_to_queue` - Add an item to queue
* `endpoint_get_a_users_available_devices` - Get a User's Available Devices
* `endpoint_get_information_about_the_users_current_playback` - Get Information About The User's Current Playback
* `endpoint_get_recently_played` - Get Current User's Recently Played Tracks
* `endpoint_get_the_users_currently_playing_track` - Get the User's Currently Playing Track
* `endpoint_pause_a_users_playback` - Pause a User's Playback
* `endpoint_seek_to_position_in_currently_playing_track` - Seek To Position In Currently Playing Track
* `endpoint_set_repeat_mode_on_users_playback` - Set Repeat Mode On User’s Playback
* `endpoint_set_volume_for_users_playback` - Set Volume For User's Playback
* `endpoint_skip_users_playback_to_next_track` - Skip User’s Playback To Next Track
* `endpoint_skip_users_playback_to_previous_track` - Skip User’s Playback To Previous Track
* `endpoint_start_a_users_playback` - Start/Resume a User's Playback
* `endpoint_toggle_shuffle_for_users_playback` - Toggle Shuffle For User’s Playback
* `endpoint_transfer_a_users_playback` - Transfer a User's Playback

### category-playlists

* `endpoint_add_tracks_to_playlist` - Add Items to a Playlist
* `endpoint_change_playlist_details` - Change a Playlist's Details
* `endpoint_create_playlist` - Create a Playlist
* `endpoint_get_a_list_of_current_users_playlists` - Get a List of Current User's Playlists
* `endpoint_get_list_users_playlists` - Get a List of a User's Playlists
* `endpoint_get_playlist` - Get a Playlist
* `endpoint_get_playlist_cover` - Get a Playlist Cover Image
* `endpoint_get_playlists_tracks` - Get a Playlist's Items
* `endpoint_remove_tracks_playlist` - Remove Items from a Playlist
* `endpoint_reorder_or_replace_playlists_tracks` - Reorder or Replace a Playlist's Items
* `endpoint_upload_custom_playlist_cover` - Upload a Custom Playlist Cover Image

### category-search

* `endpoint_search` - Search for an Item

### category-shows

* `endpoint_get_a_show` - Get a Show
* `endpoint_get_a_shows_episodes` - Get a Show's Episodes
* `endpoint_get_multiple_shows` - Get Multiple Shows

### category-tracks

* `endpoint_get_audio_analysis` - Get Audio Analysis for a Track
* `endpoint_get_audio_features` - Get Audio Features for a Track
* `endpoint_get_several_audio_features` - Get Audio Features for Several Tracks
* `endpoint_get_several_tracks` - Get Several Tracks
* `endpoint_get_track` - Get a Track

### category-users-profile

* `endpoint_get_current_users_profile` - Get Current User's Profile
* `endpoint_get_users_profile` - Get a User's Profile

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

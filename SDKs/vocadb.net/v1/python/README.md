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
    
req = operations.ActivityEntryAPIGetListRequest(
    query_params=operations.ActivityEntryAPIGetListQueryParams(
        before="1974-10-09T14:18:13Z",
        edit_event="Deleted",
        entry_fields="MainPicture",
        entry_type="Artist",
        fields="ArchivedVersion",
        get_total_count=True,
        lang="English",
        max_results=7887163202762339639,
        since="1991-06-24T08:18:55Z",
        sort_rule="CreateDate",
        user_id=8916108228658178676,
    ),
)
    
res = s.sdk.activity_entry_api_get_list(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `activity_entry_api_get_list` - Gets a list of recent activity entries.
* `album_api_delete` - Deletes an album.
* `album_api_delete_comment` - Deletes a comment.
* `album_api_delete_review`
* `album_api_get_comments` - Gets a list of comments for an album.
* `album_api_get_list` - Gets a page of albums.
* `album_api_get_names` - Gets a list of album names. Ideal for autocomplete boxes.
* `album_api_get_new_albums` - Gets list of upcoming or recent albums, same as front page.
* `album_api_get_one` - Gets an album by Id.
* `album_api_get_reviews`
* `album_api_get_top_albums` - Gets list of top rated albums, same as front page.
* `album_api_get_tracks` - Gets tracks for an album.
* `album_api_get_tracks_fields`
* `album_api_get_user_collections`
* `artist_api_delete` - Deletes an artist.
* `artist_api_delete_comment` - Deletes a comment.
* `artist_api_get_comments` - Gets a list of comments for an artist.
* `artist_api_get_list` - Find artists.
* `artist_api_get_names` - Gets a list of artist names. Ideal for autocomplete boxes.
* `artist_api_get_one` - Gets an artist by Id.
* `comment_api_delete_comment` - Deletes a comment.
* `comment_api_get_comments` - Gets a list of comments for an entry.
* `discussion_api_delete_comment`
* `discussion_api_delete_topic`
* `discussion_api_get_folders`
* `discussion_api_get_topic`
* `discussion_api_get_topics`
* `discussion_api_get_topics_for_folder`
* `entry_api_get_list` - Find entries.
* `entry_api_get_names` - Gets a list of entry names. Ideal for autocomplete boxes.
* `entry_types_api_get_mapped_tag`
* `get_api_users_current_album_collection_statuses_album_id_`
* `get_api_users_current_followed_artists_artist_id_`
* `pv_api_get_list` - Gets a list of PVs for songs.
* `release_event_api_delete` - Deletes an event.
* `release_event_api_get_albums` - Gets a list of albums for a specific event.
* `release_event_api_get_list` - Gets a page of events.
* `release_event_api_get_names` - Find event names by a part of name.
            
            Matching is done anywhere from the name.
* `release_event_api_get_one`
* `release_event_api_get_published_songs` - Gets a list of songs for a specific event.
* `release_event_api_post_report` - Creates a new report.
* `release_event_series_api_delete` - Deletes an event series.
* `release_event_series_api_get_list` - Gets a page of event series.
* `release_event_series_api_get_one` - Gets single event series by ID.
* `resources_api_get_list` - Gets a number of resource sets for a specific culture.
* `song_api_delete` - Deletes a song.
* `song_api_delete_comment` - Deletes a comment.
* `song_api_get_by_id` - Gets a song by Id.
* `song_api_get_by_pv` - Gets a song by PV.
* `song_api_get_comments` - Gets a list of comments for a song.
* `song_api_get_derived` - Gets derived (alternate versions) of a song.
* `song_api_get_highlighted_songs` - Gets list of highlighted songs, same as front page.
* `song_api_get_list` - Find songs.
* `song_api_get_lyrics` - Gets lyrics by ID.
* `song_api_get_names` - Gets a list of song names. Ideal for autocomplete boxes.
* `song_api_get_ratings` - Get ratings for a song.
* `song_api_get_related` - Gets related songs.
* `song_api_get_top_songs` - Gets top rated songs.
* `song_api_post_rating` - Add or update rating for a specific song, for the currently logged in user.
* `song_list_api_delete` - Deletes a song list.
* `song_list_api_delete_comment` - Deletes a comment.
* `song_list_api_get_comments` - Gets a list of comments for a song list.
* `song_list_api_get_featured_list_names` - Gets a list of featuedd list names. Ideal for autocomplete boxes.
* `song_list_api_get_featured_lists` - Gets a list of featured song lists.
* `song_list_api_get_songs` - Gets a list of songs in a song list.
* `tag_api_delete` - Deletes a tag.
* `tag_api_delete_comment` - Deletes a comment.
            Normal users can delete their own comments, moderators can delete all comments.
            Requires login.
* `tag_api_get_by_id` - Gets a tag by ID.
* `tag_api_get_by_name` - DEPRECATED. Gets a tag by name.
* `tag_api_get_category_names_list` - Gets a list of tag category names.
* `tag_api_get_child_tags` - Gets a list of child tags for a tag.
            Only direct children will be included.
* `tag_api_get_comments` - Gets a list of comments for a tag.
            Note: pagination and sorting might be added later.
* `tag_api_get_list` - Find tags.
* `tag_api_get_names` - Find tag names by a part of name.
            
            Matching is done anywhere from the name.
* `tag_api_get_top_tags` - Gets the most common tags in a category.
* `tag_api_post_new_tag` - Creates a new tag.
* `tag_api_post_report` - Creates a new report.
* `user_api_delete_followed_tag`
* `user_api_delete_messages` - Deletes a list of user messages.
* `user_api_delete_profile_comment` - Deletes a comment.
* `user_api_get_album_collection` - Gets a list of albums in a user's collection.
* `user_api_get_album_for_user`
* `user_api_get_artist_for_user`
* `user_api_get_current` - Gets information about the currently logged in user.
* `user_api_get_events` - Gets a list of events a user has subscribed to.
* `user_api_get_followed_artists` - Gets a list of artists followed by a user.
* `user_api_get_list` - Gets a list of users.
* `user_api_get_message` - Gets a user message.
* `user_api_get_messages` - Gets a list of messages.
* `user_api_get_names` - Gets a list of user names. Ideal for autocomplete boxes.
* `user_api_get_one` - Gets user by ID.
* `user_api_get_profile_comments` - Gets a list of comments posted on user's profile.
* `user_api_get_rated_songs` - Gets a list of songs rated by a user.
* `user_api_get_song_lists`
* `user_api_get_song_rating` - Gets a specific user's rating for a song.
* `user_api_get_song_rating_for_current` - Gets currently logged in user's rating for a song.
* `user_api_post_album_status` - Add or update collection status, media type and rating for a specific album, for the currently logged in user.
* `user_api_post_followed_tag`
* `user_api_post_refresh_entry_edit` - Refresh entry edit status, indicating that the current user is still editing that entry.
* `user_api_post_report`
* `user_api_post_setting` - Updates user setting.
* `venue_api_delete` - Deletes a venue.
* `venue_api_get_list` - Gets a page of event venue.
* `venue_api_post_report` - Creates a new report.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

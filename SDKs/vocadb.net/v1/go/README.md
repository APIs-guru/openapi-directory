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
    
    req := operations.ActivityEntryAPIGetListRequest{
        QueryParams: operations.ActivityEntryAPIGetListQueryParams{
            Before: "1974-10-09T12:56:00Z",
            EditEvent: "Deleted",
            EntryFields: "MainPicture",
            EntryType: "Artist",
            Fields: "ArchivedVersion",
            GetTotalCount: true,
            Lang: "English",
            MaxResults: 7887163202762339639,
            Since: "1991-06-24T06:56:42Z",
            SortRule: "CreateDate",
            UserID: 8916108228658178676,
        },
    }
    
    res, err := s.Sdk.ActivityEntryAPIGetList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `ActivityEntryAPIGetList` - Gets a list of recent activity entries.
* `AlbumAPIDelete` - Deletes an album.
* `AlbumAPIDeleteComment` - Deletes a comment.
* `AlbumAPIDeleteReview`
* `AlbumAPIGetComments` - Gets a list of comments for an album.
* `AlbumAPIGetList` - Gets a page of albums.
* `AlbumAPIGetNames` - Gets a list of album names. Ideal for autocomplete boxes.
* `AlbumAPIGetNewAlbums` - Gets list of upcoming or recent albums, same as front page.
* `AlbumAPIGetOne` - Gets an album by Id.
* `AlbumAPIGetReviews`
* `AlbumAPIGetTopAlbums` - Gets list of top rated albums, same as front page.
* `AlbumAPIGetTracks` - Gets tracks for an album.
* `AlbumAPIGetTracksFields`
* `AlbumAPIGetUserCollections`
* `ArtistAPIDelete` - Deletes an artist.
* `ArtistAPIDeleteComment` - Deletes a comment.
* `ArtistAPIGetComments` - Gets a list of comments for an artist.
* `ArtistAPIGetList` - Find artists.
* `ArtistAPIGetNames` - Gets a list of artist names. Ideal for autocomplete boxes.
* `ArtistAPIGetOne` - Gets an artist by Id.
* `CommentAPIDeleteComment` - Deletes a comment.
* `CommentAPIGetComments` - Gets a list of comments for an entry.
* `DiscussionAPIDeleteComment`
* `DiscussionAPIDeleteTopic`
* `DiscussionAPIGetFolders`
* `DiscussionAPIGetTopic`
* `DiscussionAPIGetTopics`
* `DiscussionAPIGetTopicsForFolder`
* `EntryAPIGetList` - Find entries.
* `EntryAPIGetNames` - Gets a list of entry names. Ideal for autocomplete boxes.
* `EntryTypesAPIGetMappedTag`
* `GetAPIUsersCurrentAlbumCollectionStatusesAlbumID`
* `GetAPIUsersCurrentFollowedArtistsArtistID`
* `PvAPIGetList` - Gets a list of PVs for songs.
* `ReleaseEventAPIDelete` - Deletes an event.
* `ReleaseEventAPIGetAlbums` - Gets a list of albums for a specific event.
* `ReleaseEventAPIGetList` - Gets a page of events.
* `ReleaseEventAPIGetNames` - Find event names by a part of name.
            
            Matching is done anywhere from the name.
* `ReleaseEventAPIGetOne`
* `ReleaseEventAPIGetPublishedSongs` - Gets a list of songs for a specific event.
* `ReleaseEventAPIPostReport` - Creates a new report.
* `ReleaseEventSeriesAPIDelete` - Deletes an event series.
* `ReleaseEventSeriesAPIGetList` - Gets a page of event series.
* `ReleaseEventSeriesAPIGetOne` - Gets single event series by ID.
* `ResourcesAPIGetList` - Gets a number of resource sets for a specific culture.
* `SongAPIDelete` - Deletes a song.
* `SongAPIDeleteComment` - Deletes a comment.
* `SongAPIGetByID` - Gets a song by Id.
* `SongAPIGetByPv` - Gets a song by PV.
* `SongAPIGetComments` - Gets a list of comments for a song.
* `SongAPIGetDerived` - Gets derived (alternate versions) of a song.
* `SongAPIGetHighlightedSongs` - Gets list of highlighted songs, same as front page.
* `SongAPIGetList` - Find songs.
* `SongAPIGetLyrics` - Gets lyrics by ID.
* `SongAPIGetNames` - Gets a list of song names. Ideal for autocomplete boxes.
* `SongAPIGetRatings` - Get ratings for a song.
* `SongAPIGetRelated` - Gets related songs.
* `SongAPIGetTopSongs` - Gets top rated songs.
* `SongAPIPostRating` - Add or update rating for a specific song, for the currently logged in user.
* `SongListAPIDelete` - Deletes a song list.
* `SongListAPIDeleteComment` - Deletes a comment.
* `SongListAPIGetComments` - Gets a list of comments for a song list.
* `SongListAPIGetFeaturedListNames` - Gets a list of featuedd list names. Ideal for autocomplete boxes.
* `SongListAPIGetFeaturedLists` - Gets a list of featured song lists.
* `SongListAPIGetSongs` - Gets a list of songs in a song list.
* `TagAPIDelete` - Deletes a tag.
* `TagAPIDeleteComment` - Deletes a comment.
            Normal users can delete their own comments, moderators can delete all comments.
            Requires login.
* `TagAPIGetByID` - Gets a tag by ID.
* `TagAPIGetByName` - DEPRECATED. Gets a tag by name.
* `TagAPIGetCategoryNamesList` - Gets a list of tag category names.
* `TagAPIGetChildTags` - Gets a list of child tags for a tag.
            Only direct children will be included.
* `TagAPIGetComments` - Gets a list of comments for a tag.
            Note: pagination and sorting might be added later.
* `TagAPIGetList` - Find tags.
* `TagAPIGetNames` - Find tag names by a part of name.
            
            Matching is done anywhere from the name.
* `TagAPIGetTopTags` - Gets the most common tags in a category.
* `TagAPIPostNewTag` - Creates a new tag.
* `TagAPIPostReport` - Creates a new report.
* `UserAPIDeleteFollowedTag`
* `UserAPIDeleteMessages` - Deletes a list of user messages.
* `UserAPIDeleteProfileComment` - Deletes a comment.
* `UserAPIGetAlbumCollection` - Gets a list of albums in a user's collection.
* `UserAPIGetAlbumForUser`
* `UserAPIGetArtistForUser`
* `UserAPIGetCurrent` - Gets information about the currently logged in user.
* `UserAPIGetEvents` - Gets a list of events a user has subscribed to.
* `UserAPIGetFollowedArtists` - Gets a list of artists followed by a user.
* `UserAPIGetList` - Gets a list of users.
* `UserAPIGetMessage` - Gets a user message.
* `UserAPIGetMessages` - Gets a list of messages.
* `UserAPIGetNames` - Gets a list of user names. Ideal for autocomplete boxes.
* `UserAPIGetOne` - Gets user by ID.
* `UserAPIGetProfileComments` - Gets a list of comments posted on user's profile.
* `UserAPIGetRatedSongs` - Gets a list of songs rated by a user.
* `UserAPIGetSongLists`
* `UserAPIGetSongRating` - Gets a specific user's rating for a song.
* `UserAPIGetSongRatingForCurrent` - Gets currently logged in user's rating for a song.
* `UserAPIPostAlbumStatus` - Add or update collection status, media type and rating for a specific album, for the currently logged in user.
* `UserAPIPostFollowedTag`
* `UserAPIPostRefreshEntryEdit` - Refresh entry edit status, indicating that the current user is still editing that entry.
* `UserAPIPostReport`
* `UserAPIPostSetting` - Updates user setting.
* `VenueAPIDelete` - Deletes a venue.
* `VenueAPIGetList` - Gets a page of event venue.
* `VenueAPIPostReport` - Creates a new report.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

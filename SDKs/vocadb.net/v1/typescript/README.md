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
import { ActivityEntryApiGetListRequest, ActivityEntryApiGetListResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ActivityEntryApiGetListRequest = {
  queryParams: {
    before: "1974-10-09T16:13:53Z",
    editEvent: "Deleted",
    entryFields: "MainPicture",
    entryType: "Artist",
    fields: "ArchivedVersion",
    getTotalCount: true,
    lang: "English",
    maxResults: 7887163202762339639,
    since: "1991-06-24T10:14:35Z",
    sortRule: "CreateDate",
    userId: 8916108228658178676,
  },
};

sdk.sdk.activityEntryApiGetList(req).then((res: ActivityEntryApiGetListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `activityEntryApiGetList` - Gets a list of recent activity entries.
* `albumApiDelete` - Deletes an album.
* `albumApiDeleteComment` - Deletes a comment.
* `albumApiDeleteReview`
* `albumApiGetComments` - Gets a list of comments for an album.
* `albumApiGetList` - Gets a page of albums.
* `albumApiGetNames` - Gets a list of album names. Ideal for autocomplete boxes.
* `albumApiGetNewAlbums` - Gets list of upcoming or recent albums, same as front page.
* `albumApiGetOne` - Gets an album by Id.
* `albumApiGetReviews`
* `albumApiGetTopAlbums` - Gets list of top rated albums, same as front page.
* `albumApiGetTracks` - Gets tracks for an album.
* `albumApiGetTracksFields`
* `albumApiGetUserCollections`
* `artistApiDelete` - Deletes an artist.
* `artistApiDeleteComment` - Deletes a comment.
* `artistApiGetComments` - Gets a list of comments for an artist.
* `artistApiGetList` - Find artists.
* `artistApiGetNames` - Gets a list of artist names. Ideal for autocomplete boxes.
* `artistApiGetOne` - Gets an artist by Id.
* `commentApiDeleteComment` - Deletes a comment.
* `commentApiGetComments` - Gets a list of comments for an entry.
* `discussionApiDeleteComment`
* `discussionApiDeleteTopic`
* `discussionApiGetFolders`
* `discussionApiGetTopic`
* `discussionApiGetTopics`
* `discussionApiGetTopicsForFolder`
* `entryApiGetList` - Find entries.
* `entryApiGetNames` - Gets a list of entry names. Ideal for autocomplete boxes.
* `entryTypesApiGetMappedTag`
* `getApiUsersCurrentAlbumCollectionStatusesAlbumId`
* `getApiUsersCurrentFollowedArtistsArtistId`
* `pvApiGetList` - Gets a list of PVs for songs.
* `releaseEventApiDelete` - Deletes an event.
* `releaseEventApiGetAlbums` - Gets a list of albums for a specific event.
* `releaseEventApiGetList` - Gets a page of events.
* `releaseEventApiGetNames` - Find event names by a part of name.
            
            Matching is done anywhere from the name.
* `releaseEventApiGetOne`
* `releaseEventApiGetPublishedSongs` - Gets a list of songs for a specific event.
* `releaseEventApiPostReport` - Creates a new report.
* `releaseEventSeriesApiDelete` - Deletes an event series.
* `releaseEventSeriesApiGetList` - Gets a page of event series.
* `releaseEventSeriesApiGetOne` - Gets single event series by ID.
* `resourcesApiGetList` - Gets a number of resource sets for a specific culture.
* `songApiDelete` - Deletes a song.
* `songApiDeleteComment` - Deletes a comment.
* `songApiGetById` - Gets a song by Id.
* `songApiGetByPv` - Gets a song by PV.
* `songApiGetComments` - Gets a list of comments for a song.
* `songApiGetDerived` - Gets derived (alternate versions) of a song.
* `songApiGetHighlightedSongs` - Gets list of highlighted songs, same as front page.
* `songApiGetList` - Find songs.
* `songApiGetLyrics` - Gets lyrics by ID.
* `songApiGetNames` - Gets a list of song names. Ideal for autocomplete boxes.
* `songApiGetRatings` - Get ratings for a song.
* `songApiGetRelated` - Gets related songs.
* `songApiGetTopSongs` - Gets top rated songs.
* `songApiPostRating` - Add or update rating for a specific song, for the currently logged in user.
* `songListApiDelete` - Deletes a song list.
* `songListApiDeleteComment` - Deletes a comment.
* `songListApiGetComments` - Gets a list of comments for a song list.
* `songListApiGetFeaturedListNames` - Gets a list of featuedd list names. Ideal for autocomplete boxes.
* `songListApiGetFeaturedLists` - Gets a list of featured song lists.
* `songListApiGetSongs` - Gets a list of songs in a song list.
* `tagApiDelete` - Deletes a tag.
* `tagApiDeleteComment` - Deletes a comment.
            Normal users can delete their own comments, moderators can delete all comments.
            Requires login.
* `tagApiGetById` - Gets a tag by ID.
* `tagApiGetByName` - DEPRECATED. Gets a tag by name.
* `tagApiGetCategoryNamesList` - Gets a list of tag category names.
* `tagApiGetChildTags` - Gets a list of child tags for a tag.
            Only direct children will be included.
* `tagApiGetComments` - Gets a list of comments for a tag.
            Note: pagination and sorting might be added later.
* `tagApiGetList` - Find tags.
* `tagApiGetNames` - Find tag names by a part of name.
            
            Matching is done anywhere from the name.
* `tagApiGetTopTags` - Gets the most common tags in a category.
* `tagApiPostNewTag` - Creates a new tag.
* `tagApiPostReport` - Creates a new report.
* `userApiDeleteFollowedTag`
* `userApiDeleteMessages` - Deletes a list of user messages.
* `userApiDeleteProfileComment` - Deletes a comment.
* `userApiGetAlbumCollection` - Gets a list of albums in a user's collection.
* `userApiGetAlbumForUser`
* `userApiGetArtistForUser`
* `userApiGetCurrent` - Gets information about the currently logged in user.
* `userApiGetEvents` - Gets a list of events a user has subscribed to.
* `userApiGetFollowedArtists` - Gets a list of artists followed by a user.
* `userApiGetList` - Gets a list of users.
* `userApiGetMessage` - Gets a user message.
* `userApiGetMessages` - Gets a list of messages.
* `userApiGetNames` - Gets a list of user names. Ideal for autocomplete boxes.
* `userApiGetOne` - Gets user by ID.
* `userApiGetProfileComments` - Gets a list of comments posted on user's profile.
* `userApiGetRatedSongs` - Gets a list of songs rated by a user.
* `userApiGetSongLists`
* `userApiGetSongRating` - Gets a specific user's rating for a song.
* `userApiGetSongRatingForCurrent` - Gets currently logged in user's rating for a song.
* `userApiPostAlbumStatus` - Add or update collection status, media type and rating for a specific album, for the currently logged in user.
* `userApiPostFollowedTag`
* `userApiPostRefreshEntryEdit` - Refresh entry edit status, indicating that the current user is still editing that entry.
* `userApiPostReport`
* `userApiPostSetting` - Updates user setting.
* `venueApiDelete` - Deletes a venue.
* `venueApiGetList` - Gets a page of event venue.
* `venueApiPostReport` - Creates a new report.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

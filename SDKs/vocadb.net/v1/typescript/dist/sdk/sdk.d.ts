import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://vocadb.net"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * activityEntryApiGetList - Gets a list of recent activity entries.
     *
     * Entries are always returned sorted from newest to oldest.
     *             Activity for deleted entries is not returned.
    **/
    activityEntryApiGetList(req: operations.ActivityEntryApiGetListRequest, config?: AxiosRequestConfig): Promise<operations.ActivityEntryApiGetListResponse>;
    /**
     * albumApiDelete - Deletes an album.
    **/
    albumApiDelete(req: operations.AlbumApiDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AlbumApiDeleteResponse>;
    /**
     * albumApiDeleteComment - Deletes a comment.
     *
     * Normal users can delete their own comments, moderators can delete all comments.
     *             Requires login.
    **/
    albumApiDeleteComment(req: operations.AlbumApiDeleteCommentRequest, config?: AxiosRequestConfig): Promise<operations.AlbumApiDeleteCommentResponse>;
    albumApiDeleteReview(req: operations.AlbumApiDeleteReviewRequest, config?: AxiosRequestConfig): Promise<operations.AlbumApiDeleteReviewResponse>;
    /**
     * albumApiGetComments - Gets a list of comments for an album.
     *
     * Pagination and sorting might be added later.
    **/
    albumApiGetComments(req: operations.AlbumApiGetCommentsRequest, config?: AxiosRequestConfig): Promise<operations.AlbumApiGetCommentsResponse>;
    /**
     * albumApiGetList - Gets a page of albums.
    **/
    albumApiGetList(req: operations.AlbumApiGetListRequest, config?: AxiosRequestConfig): Promise<operations.AlbumApiGetListResponse>;
    /**
     * albumApiGetNames - Gets a list of album names. Ideal for autocomplete boxes.
    **/
    albumApiGetNames(req: operations.AlbumApiGetNamesRequest, config?: AxiosRequestConfig): Promise<operations.AlbumApiGetNamesResponse>;
    /**
     * albumApiGetNewAlbums - Gets list of upcoming or recent albums, same as front page.
     *
     * Output is cached for 1 hour.
    **/
    albumApiGetNewAlbums(req: operations.AlbumApiGetNewAlbumsRequest, config?: AxiosRequestConfig): Promise<operations.AlbumApiGetNewAlbumsResponse>;
    /**
     * albumApiGetOne - Gets an album by Id.
    **/
    albumApiGetOne(req: operations.AlbumApiGetOneRequest, config?: AxiosRequestConfig): Promise<operations.AlbumApiGetOneResponse>;
    albumApiGetReviews(req: operations.AlbumApiGetReviewsRequest, config?: AxiosRequestConfig): Promise<operations.AlbumApiGetReviewsResponse>;
    /**
     * albumApiGetTopAlbums - Gets list of top rated albums, same as front page.
     *
     * Output is cached for 1 hour.
    **/
    albumApiGetTopAlbums(req: operations.AlbumApiGetTopAlbumsRequest, config?: AxiosRequestConfig): Promise<operations.AlbumApiGetTopAlbumsResponse>;
    /**
     * albumApiGetTracks - Gets tracks for an album.
    **/
    albumApiGetTracks(req: operations.AlbumApiGetTracksRequest, config?: AxiosRequestConfig): Promise<operations.AlbumApiGetTracksResponse>;
    albumApiGetTracksFields(req: operations.AlbumApiGetTracksFieldsRequest, config?: AxiosRequestConfig): Promise<operations.AlbumApiGetTracksFieldsResponse>;
    albumApiGetUserCollections(req: operations.AlbumApiGetUserCollectionsRequest, config?: AxiosRequestConfig): Promise<operations.AlbumApiGetUserCollectionsResponse>;
    /**
     * artistApiDelete - Deletes an artist.
    **/
    artistApiDelete(req: operations.ArtistApiDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ArtistApiDeleteResponse>;
    /**
     * artistApiDeleteComment - Deletes a comment.
     *
     * Normal users can delete their own comments, moderators can delete all comments.
     *             Requires login.
    **/
    artistApiDeleteComment(req: operations.ArtistApiDeleteCommentRequest, config?: AxiosRequestConfig): Promise<operations.ArtistApiDeleteCommentResponse>;
    /**
     * artistApiGetComments - Gets a list of comments for an artist.
     *
     * Pagination and sorting might be added later.
    **/
    artistApiGetComments(req: operations.ArtistApiGetCommentsRequest, config?: AxiosRequestConfig): Promise<operations.ArtistApiGetCommentsResponse>;
    /**
     * artistApiGetList - Find artists.
    **/
    artistApiGetList(req: operations.ArtistApiGetListRequest, config?: AxiosRequestConfig): Promise<operations.ArtistApiGetListResponse>;
    /**
     * artistApiGetNames - Gets a list of artist names. Ideal for autocomplete boxes.
    **/
    artistApiGetNames(req: operations.ArtistApiGetNamesRequest, config?: AxiosRequestConfig): Promise<operations.ArtistApiGetNamesResponse>;
    /**
     * artistApiGetOne - Gets an artist by Id.
    **/
    artistApiGetOne(req: operations.ArtistApiGetOneRequest, config?: AxiosRequestConfig): Promise<operations.ArtistApiGetOneResponse>;
    /**
     * commentApiDeleteComment - Deletes a comment.
     *
     * Normal users can delete their own comments, moderators can delete all comments.
     *             Requires login.
    **/
    commentApiDeleteComment(req: operations.CommentApiDeleteCommentRequest, config?: AxiosRequestConfig): Promise<operations.CommentApiDeleteCommentResponse>;
    /**
     * commentApiGetComments - Gets a list of comments for an entry.
    **/
    commentApiGetComments(req: operations.CommentApiGetCommentsRequest, config?: AxiosRequestConfig): Promise<operations.CommentApiGetCommentsResponse>;
    discussionApiDeleteComment(req: operations.DiscussionApiDeleteCommentRequest, config?: AxiosRequestConfig): Promise<operations.DiscussionApiDeleteCommentResponse>;
    discussionApiDeleteTopic(req: operations.DiscussionApiDeleteTopicRequest, config?: AxiosRequestConfig): Promise<operations.DiscussionApiDeleteTopicResponse>;
    discussionApiGetFolders(req: operations.DiscussionApiGetFoldersRequest, config?: AxiosRequestConfig): Promise<operations.DiscussionApiGetFoldersResponse>;
    discussionApiGetTopic(req: operations.DiscussionApiGetTopicRequest, config?: AxiosRequestConfig): Promise<operations.DiscussionApiGetTopicResponse>;
    discussionApiGetTopics(req: operations.DiscussionApiGetTopicsRequest, config?: AxiosRequestConfig): Promise<operations.DiscussionApiGetTopicsResponse>;
    discussionApiGetTopicsForFolder(req: operations.DiscussionApiGetTopicsForFolderRequest, config?: AxiosRequestConfig): Promise<operations.DiscussionApiGetTopicsForFolderResponse>;
    /**
     * entryApiGetList - Find entries.
    **/
    entryApiGetList(req: operations.EntryApiGetListRequest, config?: AxiosRequestConfig): Promise<operations.EntryApiGetListResponse>;
    /**
     * entryApiGetNames - Gets a list of entry names. Ideal for autocomplete boxes.
    **/
    entryApiGetNames(req: operations.EntryApiGetNamesRequest, config?: AxiosRequestConfig): Promise<operations.EntryApiGetNamesResponse>;
    entryTypesApiGetMappedTag(req: operations.EntryTypesApiGetMappedTagRequest, config?: AxiosRequestConfig): Promise<operations.EntryTypesApiGetMappedTagResponse>;
    getApiUsersCurrentAlbumCollectionStatusesAlbumId(req: operations.GetApiUsersCurrentAlbumCollectionStatusesAlbumIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiUsersCurrentAlbumCollectionStatusesAlbumIdResponse>;
    getApiUsersCurrentFollowedArtistsArtistId(req: operations.GetApiUsersCurrentFollowedArtistsArtistIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiUsersCurrentFollowedArtistsArtistIdResponse>;
    /**
     * pvApiGetList - Gets a list of PVs for songs.
    **/
    pvApiGetList(req: operations.PvApiGetListRequest, config?: AxiosRequestConfig): Promise<operations.PvApiGetListResponse>;
    /**
     * releaseEventApiDelete - Deletes an event.
    **/
    releaseEventApiDelete(req: operations.ReleaseEventApiDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ReleaseEventApiDeleteResponse>;
    /**
     * releaseEventApiGetAlbums - Gets a list of albums for a specific event.
    **/
    releaseEventApiGetAlbums(req: operations.ReleaseEventApiGetAlbumsRequest, config?: AxiosRequestConfig): Promise<operations.ReleaseEventApiGetAlbumsResponse>;
    /**
     * releaseEventApiGetList - Gets a page of events.
    **/
    releaseEventApiGetList(req: operations.ReleaseEventApiGetListRequest, config?: AxiosRequestConfig): Promise<operations.ReleaseEventApiGetListResponse>;
    /**
     * releaseEventApiGetNames - Find event names by a part of name.
     *
     *             Matching is done anywhere from the name.
    **/
    releaseEventApiGetNames(req: operations.ReleaseEventApiGetNamesRequest, config?: AxiosRequestConfig): Promise<operations.ReleaseEventApiGetNamesResponse>;
    releaseEventApiGetOne(req: operations.ReleaseEventApiGetOneRequest, config?: AxiosRequestConfig): Promise<operations.ReleaseEventApiGetOneResponse>;
    /**
     * releaseEventApiGetPublishedSongs - Gets a list of songs for a specific event.
    **/
    releaseEventApiGetPublishedSongs(req: operations.ReleaseEventApiGetPublishedSongsRequest, config?: AxiosRequestConfig): Promise<operations.ReleaseEventApiGetPublishedSongsResponse>;
    /**
     * releaseEventApiPostReport - Creates a new report.
    **/
    releaseEventApiPostReport(req: operations.ReleaseEventApiPostReportRequest, config?: AxiosRequestConfig): Promise<operations.ReleaseEventApiPostReportResponse>;
    /**
     * releaseEventSeriesApiDelete - Deletes an event series.
    **/
    releaseEventSeriesApiDelete(req: operations.ReleaseEventSeriesApiDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ReleaseEventSeriesApiDeleteResponse>;
    /**
     * releaseEventSeriesApiGetList - Gets a page of event series.
    **/
    releaseEventSeriesApiGetList(req: operations.ReleaseEventSeriesApiGetListRequest, config?: AxiosRequestConfig): Promise<operations.ReleaseEventSeriesApiGetListResponse>;
    /**
     * releaseEventSeriesApiGetOne - Gets single event series by ID.
    **/
    releaseEventSeriesApiGetOne(req: operations.ReleaseEventSeriesApiGetOneRequest, config?: AxiosRequestConfig): Promise<operations.ReleaseEventSeriesApiGetOneResponse>;
    /**
     * resourcesApiGetList - Gets a number of resource sets for a specific culture.
    **/
    resourcesApiGetList(req: operations.ResourcesApiGetListRequest, config?: AxiosRequestConfig): Promise<operations.ResourcesApiGetListResponse>;
    /**
     * songApiDelete - Deletes a song.
    **/
    songApiDelete(req: operations.SongApiDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SongApiDeleteResponse>;
    /**
     * songApiDeleteComment - Deletes a comment.
     *
     * Normal users can delete their own comments, moderators can delete all comments.
     *             Requires login.
    **/
    songApiDeleteComment(req: operations.SongApiDeleteCommentRequest, config?: AxiosRequestConfig): Promise<operations.SongApiDeleteCommentResponse>;
    /**
     * songApiGetById - Gets a song by Id.
    **/
    songApiGetById(req: operations.SongApiGetByIdRequest, config?: AxiosRequestConfig): Promise<operations.SongApiGetByIdResponse>;
    /**
     * songApiGetByPv - Gets a song by PV.
    **/
    songApiGetByPv(req: operations.SongApiGetByPvRequest, config?: AxiosRequestConfig): Promise<operations.SongApiGetByPvResponse>;
    /**
     * songApiGetComments - Gets a list of comments for a song.
     *
     * Pagination and sorting might be added later.
    **/
    songApiGetComments(req: operations.SongApiGetCommentsRequest, config?: AxiosRequestConfig): Promise<operations.SongApiGetCommentsResponse>;
    /**
     * songApiGetDerived - Gets derived (alternate versions) of a song.
     *
     * Pagination and sorting might be added later.
    **/
    songApiGetDerived(req: operations.SongApiGetDerivedRequest, config?: AxiosRequestConfig): Promise<operations.SongApiGetDerivedResponse>;
    /**
     * songApiGetHighlightedSongs - Gets list of highlighted songs, same as front page.
     *
     * Output is cached for 1 hour.
    **/
    songApiGetHighlightedSongs(req: operations.SongApiGetHighlightedSongsRequest, config?: AxiosRequestConfig): Promise<operations.SongApiGetHighlightedSongsResponse>;
    /**
     * songApiGetList - Find songs.
    **/
    songApiGetList(req: operations.SongApiGetListRequest, config?: AxiosRequestConfig): Promise<operations.SongApiGetListResponse>;
    /**
     * songApiGetLyrics - Gets lyrics by ID.
     *
     * Output is cached. Specify song version as parameter to refresh.
    **/
    songApiGetLyrics(req: operations.SongApiGetLyricsRequest, config?: AxiosRequestConfig): Promise<operations.SongApiGetLyricsResponse>;
    /**
     * songApiGetNames - Gets a list of song names. Ideal for autocomplete boxes.
    **/
    songApiGetNames(req: operations.SongApiGetNamesRequest, config?: AxiosRequestConfig): Promise<operations.SongApiGetNamesResponse>;
    /**
     * songApiGetRatings - Get ratings for a song.
     *
     * The result includes ratings and user information.
     *             For users who have requested not to make their ratings public, the user will be empty.
    **/
    songApiGetRatings(req: operations.SongApiGetRatingsRequest, config?: AxiosRequestConfig): Promise<operations.SongApiGetRatingsResponse>;
    /**
     * songApiGetRelated - Gets related songs.
    **/
    songApiGetRelated(req: operations.SongApiGetRelatedRequest, config?: AxiosRequestConfig): Promise<operations.SongApiGetRelatedResponse>;
    /**
     * songApiGetTopSongs - Gets top rated songs.
    **/
    songApiGetTopSongs(req: operations.SongApiGetTopSongsRequest, config?: AxiosRequestConfig): Promise<operations.SongApiGetTopSongsResponse>;
    /**
     * songApiPostRating - Add or update rating for a specific song, for the currently logged in user.
     *
     * If the user has already rated the song, any previous rating is replaced.
     *             Authorization cookie must be included.
     *             This API supports CORS.
    **/
    songApiPostRating(req: operations.SongApiPostRatingRequest, config?: AxiosRequestConfig): Promise<operations.SongApiPostRatingResponse>;
    /**
     * songListApiDelete - Deletes a song list.
    **/
    songListApiDelete(req: operations.SongListApiDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SongListApiDeleteResponse>;
    /**
     * songListApiDeleteComment - Deletes a comment.
     *
     * Normal users can delete their own comments, moderators can delete all comments.
     *             Requires login.
    **/
    songListApiDeleteComment(req: operations.SongListApiDeleteCommentRequest, config?: AxiosRequestConfig): Promise<operations.SongListApiDeleteCommentResponse>;
    /**
     * songListApiGetComments - Gets a list of comments for a song list.
    **/
    songListApiGetComments(req: operations.SongListApiGetCommentsRequest, config?: AxiosRequestConfig): Promise<operations.SongListApiGetCommentsResponse>;
    /**
     * songListApiGetFeaturedListNames - Gets a list of featuedd list names. Ideal for autocomplete boxes.
    **/
    songListApiGetFeaturedListNames(req: operations.SongListApiGetFeaturedListNamesRequest, config?: AxiosRequestConfig): Promise<operations.SongListApiGetFeaturedListNamesResponse>;
    /**
     * songListApiGetFeaturedLists - Gets a list of featured song lists.
    **/
    songListApiGetFeaturedLists(req: operations.SongListApiGetFeaturedListsRequest, config?: AxiosRequestConfig): Promise<operations.SongListApiGetFeaturedListsResponse>;
    /**
     * songListApiGetSongs - Gets a list of songs in a song list.
    **/
    songListApiGetSongs(req: operations.SongListApiGetSongsRequest, config?: AxiosRequestConfig): Promise<operations.SongListApiGetSongsResponse>;
    /**
     * tagApiDelete - Deletes a tag.
    **/
    tagApiDelete(req: operations.TagApiDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TagApiDeleteResponse>;
    /**
     * tagApiDeleteComment - Deletes a comment.
     *             Normal users can delete their own comments, moderators can delete all comments.
     *             Requires login.
    **/
    tagApiDeleteComment(req: operations.TagApiDeleteCommentRequest, config?: AxiosRequestConfig): Promise<operations.TagApiDeleteCommentResponse>;
    /**
     * tagApiGetById - Gets a tag by ID.
    **/
    tagApiGetById(req: operations.TagApiGetByIdRequest, config?: AxiosRequestConfig): Promise<operations.TagApiGetByIdResponse>;
    /**
     * tagApiGetByName - DEPRECATED. Gets a tag by name.
    **/
    tagApiGetByName(req: operations.TagApiGetByNameRequest, config?: AxiosRequestConfig): Promise<operations.TagApiGetByNameResponse>;
    /**
     * tagApiGetCategoryNamesList - Gets a list of tag category names.
    **/
    tagApiGetCategoryNamesList(req: operations.TagApiGetCategoryNamesListRequest, config?: AxiosRequestConfig): Promise<operations.TagApiGetCategoryNamesListResponse>;
    /**
     * tagApiGetChildTags - Gets a list of child tags for a tag.
     *             Only direct children will be included.
    **/
    tagApiGetChildTags(req: operations.TagApiGetChildTagsRequest, config?: AxiosRequestConfig): Promise<operations.TagApiGetChildTagsResponse>;
    /**
     * tagApiGetComments - Gets a list of comments for a tag.
     *             Note: pagination and sorting might be added later.
    **/
    tagApiGetComments(req: operations.TagApiGetCommentsRequest, config?: AxiosRequestConfig): Promise<operations.TagApiGetCommentsResponse>;
    /**
     * tagApiGetList - Find tags.
    **/
    tagApiGetList(req: operations.TagApiGetListRequest, config?: AxiosRequestConfig): Promise<operations.TagApiGetListResponse>;
    /**
     * tagApiGetNames - Find tag names by a part of name.
     *
     *             Matching is done anywhere from the name.
    **/
    tagApiGetNames(req: operations.TagApiGetNamesRequest, config?: AxiosRequestConfig): Promise<operations.TagApiGetNamesResponse>;
    /**
     * tagApiGetTopTags - Gets the most common tags in a category.
    **/
    tagApiGetTopTags(req: operations.TagApiGetTopTagsRequest, config?: AxiosRequestConfig): Promise<operations.TagApiGetTopTagsResponse>;
    /**
     * tagApiPostNewTag - Creates a new tag.
    **/
    tagApiPostNewTag(req: operations.TagApiPostNewTagRequest, config?: AxiosRequestConfig): Promise<operations.TagApiPostNewTagResponse>;
    /**
     * tagApiPostReport - Creates a new report.
    **/
    tagApiPostReport(req: operations.TagApiPostReportRequest, config?: AxiosRequestConfig): Promise<operations.TagApiPostReportResponse>;
    userApiDeleteFollowedTag(req: operations.UserApiDeleteFollowedTagRequest, config?: AxiosRequestConfig): Promise<operations.UserApiDeleteFollowedTagResponse>;
    /**
     * userApiDeleteMessages - Deletes a list of user messages.
    **/
    userApiDeleteMessages(req: operations.UserApiDeleteMessagesRequest, config?: AxiosRequestConfig): Promise<operations.UserApiDeleteMessagesResponse>;
    /**
     * userApiDeleteProfileComment - Deletes a comment.
     *
     * Normal users can delete their own comments, moderators can delete all comments.
     *             Requires login.
    **/
    userApiDeleteProfileComment(req: operations.UserApiDeleteProfileCommentRequest, config?: AxiosRequestConfig): Promise<operations.UserApiDeleteProfileCommentResponse>;
    /**
     * userApiGetAlbumCollection - Gets a list of albums in a user's collection.
     *
     * This includes albums that have been rated by the user as well as albums that the user has bought or wishlisted.
     *             Note that the user might have set his album ownership status and media type as private, in which case those properties are not included.
    **/
    userApiGetAlbumCollection(req: operations.UserApiGetAlbumCollectionRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetAlbumCollectionResponse>;
    userApiGetAlbumForUser(req: operations.UserApiGetAlbumForUserRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetAlbumForUserResponse>;
    userApiGetArtistForUser(req: operations.UserApiGetArtistForUserRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetArtistForUserResponse>;
    /**
     * userApiGetCurrent - Gets information about the currently logged in user.
     *
     * Requires login information.
     *             This API supports CORS, and is restricted to specific origins.
    **/
    userApiGetCurrent(req: operations.UserApiGetCurrentRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetCurrentResponse>;
    /**
     * userApiGetEvents - Gets a list of events a user has subscribed to.
    **/
    userApiGetEvents(req: operations.UserApiGetEventsRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetEventsResponse>;
    /**
     * userApiGetFollowedArtists - Gets a list of artists followed by a user.
    **/
    userApiGetFollowedArtists(req: operations.UserApiGetFollowedArtistsRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetFollowedArtistsResponse>;
    /**
     * userApiGetList - Gets a list of users.
    **/
    userApiGetList(req: operations.UserApiGetListRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetListResponse>;
    /**
     * userApiGetMessage - Gets a user message.
     *
     * The message will be marked as read.
     *             User can only load messages from their own inbox.
    **/
    userApiGetMessage(req: operations.UserApiGetMessageRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetMessageResponse>;
    /**
     * userApiGetMessages - Gets a list of messages.
    **/
    userApiGetMessages(req: operations.UserApiGetMessagesRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetMessagesResponse>;
    /**
     * userApiGetNames - Gets a list of user names. Ideal for autocomplete boxes.
    **/
    userApiGetNames(req: operations.UserApiGetNamesRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetNamesResponse>;
    /**
     * userApiGetOne - Gets user by ID.
    **/
    userApiGetOne(req: operations.UserApiGetOneRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetOneResponse>;
    /**
     * userApiGetProfileComments - Gets a list of comments posted on user's profile.
    **/
    userApiGetProfileComments(req: operations.UserApiGetProfileCommentsRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetProfileCommentsResponse>;
    /**
     * userApiGetRatedSongs - Gets a list of songs rated by a user.
    **/
    userApiGetRatedSongs(req: operations.UserApiGetRatedSongsRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetRatedSongsResponse>;
    userApiGetSongLists(req: operations.UserApiGetSongListsRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetSongListsResponse>;
    /**
     * userApiGetSongRating - Gets a specific user's rating for a song.
    **/
    userApiGetSongRating(req: operations.UserApiGetSongRatingRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetSongRatingResponse>;
    /**
     * userApiGetSongRatingForCurrent - Gets currently logged in user's rating for a song.
     *
     * Requires authentication.
    **/
    userApiGetSongRatingForCurrent(req: operations.UserApiGetSongRatingForCurrentRequest, config?: AxiosRequestConfig): Promise<operations.UserApiGetSongRatingForCurrentResponse>;
    /**
     * userApiPostAlbumStatus - Add or update collection status, media type and rating for a specific album, for the currently logged in user.
     *
     * If the user has already rated the album, any previous rating is replaced.
     *             Authorization cookie must be included.
    **/
    userApiPostAlbumStatus(req: operations.UserApiPostAlbumStatusRequest, config?: AxiosRequestConfig): Promise<operations.UserApiPostAlbumStatusResponse>;
    userApiPostFollowedTag(req: operations.UserApiPostFollowedTagRequest, config?: AxiosRequestConfig): Promise<operations.UserApiPostFollowedTagResponse>;
    /**
     * userApiPostRefreshEntryEdit - Refresh entry edit status, indicating that the current user is still editing that entry.
    **/
    userApiPostRefreshEntryEdit(req: operations.UserApiPostRefreshEntryEditRequest, config?: AxiosRequestConfig): Promise<operations.UserApiPostRefreshEntryEditResponse>;
    userApiPostReport(req: operations.UserApiPostReportRequest, config?: AxiosRequestConfig): Promise<operations.UserApiPostReportResponse>;
    /**
     * userApiPostSetting - Updates user setting.
    **/
    userApiPostSetting(req: operations.UserApiPostSettingRequest, config?: AxiosRequestConfig): Promise<operations.UserApiPostSettingResponse>;
    /**
     * venueApiDelete - Deletes a venue.
    **/
    venueApiDelete(req: operations.VenueApiDeleteRequest, config?: AxiosRequestConfig): Promise<operations.VenueApiDeleteResponse>;
    /**
     * venueApiGetList - Gets a page of event venue.
    **/
    venueApiGetList(req: operations.VenueApiGetListRequest, config?: AxiosRequestConfig): Promise<operations.VenueApiGetListResponse>;
    /**
     * venueApiPostReport - Creates a new report.
    **/
    venueApiPostReport(req: operations.VenueApiPostReportRequest, config?: AxiosRequestConfig): Promise<operations.VenueApiPostReportResponse>;
}
export {};

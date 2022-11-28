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
import { GetEndpointsRequest, GetEndpointsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  }
));
    
const req: GetEndpointsRequest = {
  queryParams: {
    openapi: false,
  },
};

sdk.apiInformation.getEndpoints(req).then((res: GetEndpointsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### API Information

* `getEndpoints` - Get an API specification

### Albums\Album videos

* `addVideoToAlbum` - Add a specific video to an album
* `addVideoToAlbumAlt1` - Add a specific video to an album
* `getAlbumVideo` - Get a specific video in an album
* `getAlbumVideoAlt1` - Get a specific video in an album
* `getAlbumVideos` - Get all the videos in an album
* `getAlbumVideosAlt1` - Get all the videos in an album
* `removeVideoFromAlbum` - Remove a video from an album
* `removeVideoFromAlbumAlt1` - Remove a video from an album
* `replaceVideosInAlbum` - Replace all the videos in an album
* `replaceVideosInAlbumAlt1` - Replace all the videos in an album
* `setVideoAsAlbumThumbnail` - Set a video as the album thumbnail
* `setVideoAsAlbumThumbnailAlt1` - Set a video as the album thumbnail

### Albums\Custom album logos

* `createAlbumLogo` - Add a custom album logo
* `deleteAlbumLogo` - Remove a custom album logo
* `getAlbumLogo` - Get a specific custom album logo
* `getAlbumLogos` - Get all the custom logos of an album
* `replaceAlbumLogo` - Replace a custom album logo

### Albums\Custom album thumbnails

* `createAlbumCustomThumb` - Add a custom uploaded thumbnail
* `deleteAlbumCustomThumbnail` - Remove a custom uploaded album thumbnail
* `getAlbumCustomThumbnail` - Get a specific custom uploaded album thumbnail
* `getAlbumCustomThumbs` - Get all the custom upload thumbnails of an album
* `replaceAlbumCustomThumb` - Replace a custom uploaded album thumbnail

### Albums\Essentials

* `createAlbum` - Create an album
* `createAlbumAlt1` - Create an album
* `deleteAlbum` - Delete an album
* `deleteAlbumAlt1` - Delete an album
* `editAlbum` - Edit an album
* `editAlbumAlt1` - Edit an album
* `getAlbum` - Get a specific album
* `getAlbumAlt1` - Get a specific album
* `getAlbums` - Get all the albums that belong to a user
* `getAlbumsAlt1` - Get all the albums that belong to a user

### Authentication Extras\Essentials

* `clientAuth` - Authorize a client with OAuth
* `convertAccessToken` - Convert OAuth 1 access tokens to OAuth 2 access tokens
* `deleteToken` - Revoke the current access token
* `exchangeAuthCode` - Exchange an authorization code for an access token
* `verifyToken` - Verify an OAuth 2 token

### Categories\Channels

* `getCategoryChannels` - Get all the channels in a category

### Categories\Essentials

* `getCategories` - Get all categories
* `getCategory` - Get a specific category

### Categories\Groups

* `getCategoryGroups` - Get all the groups in a category

### Categories\Subscriptions

* `checkIfUserSubscribedToCategory` - Check if a user follows a category
* `checkIfUserSubscribedToCategoryAlt1` - Check if a user follows a category
* `getCategorySubscriptions` - Get all the categories that a user follows
* `getCategorySubscriptionsAlt1` - Get all the categories that a user follows
* `subscribeToCategory` - Subscribe a user to a single category
* `subscribeToCategoryAlt1` - Subscribe a user to a single category
* `unsubscribeFromCategory` - Unsubscribe a user from a category
* `unsubscribeFromCategoryAlt1` - Unsubscribe a user from a category

### Categories\Videos

* `checkCategoryForVideo` - Check for a video in a category
* `getCategoryVideos` - Get all the videos in a category
* `getVideoCategories` - Get all the categories to which a video belongs
* `suggestVideoCategory` - Suggest categories for a video

### Channels\Categories

* `addChannelCategories` - Add a list of categories to a channel
* `categorizeChannel` - Categorize a channel
* `deleteChannelCategory` - Remove a category from a channel
* `getChannelCategories` - Get all the categories in a channel

### Channels\Essentials

* `createChannel` - Create a channel
* `deleteChannel` - Delete a channel
* `editChannel` - Edit a channel
* `getChannel` - Get a specific channel
* `getChannelSubscriptions` - Get all the channels to which a user subscribes
* `getChannelSubscriptionsAlt1` - Get all the channels to which a user subscribes
* `getChannels` - Get all channels

### Channels\Moderators

* `addChannelModerator` - Add a specific channel moderator
* `addChannelModerators` - Add a list of channel moderators
* `getChannelModerator` - Get a specific channel moderator
* `getChannelModerators` - Get all the moderators in a channel
* `removeChannelModerator` - Remove a specific channel moderator
* `removeChannelModerators` - Remove a list of channel moderators
* `replaceChannelModerators` - Replace the moderators of a channel

### Channels\Private channel members

* `deleteChannelPrivacyUser` - Restrict a user from viewing a private channel
* `getChannelPrivacyUsers` - Get all the users who can view a private channel
* `setChannelPrivacyUser` - Permit a specific user to view a private channel
* `setChannelPrivacyUsers` - Permit a list of users to view a private channel

### Channels\Subscriptions and subscribers

* `checkIfUserSubscribedToChannel` - Check if a user follows a channel
* `checkIfUserSubscribedToChannelAlt1` - Check if a user follows a channel
* `getChannelSubscribers` - Get all the followers of a channel
* `subscribeToChannel` - Subscribe a user to a specific channel
* `subscribeToChannelAlt1` - Subscribe a user to a specific channel
* `unsubscribeFromChannel` - Unsubscribe a user from a specific channel
* `unsubscribeFromChannelAlt1` - Unsubscribe a user from a specific channel

### Channels\Tags

* `addChannelTag` - Add a specific tag to a channel
* `addTagsToChannel` - Add a list of tags to a channel
* `checkIfChannelHasTag` - Check if a tag has been added to a channel
* `deleteTagFromChannel` - Remove a tag from a channel
* `getChannelTags` - Get all the tags that have been added to a channel

### Channels\Videos

* `addVideoToChannel` - Add a specific video to a channel
* `addVideosToChannel` - Add a list of videos to a channel
* `deleteVideoFromChannel` - Remove a specific video from a channel
* `getAvailableVideoChannels` - Get all the channels to which a user can add or remove a specific video
* `getChannelVideo` - Get a specific video in a channel
* `getChannelVideos` - Get all the videos in a channel
* `removeVideosFromChannel` - Remove a list of videos from a channel

### Embed Presets\Custom Logos

* `createCustomLogo` - Add a custom logo
* `createCustomLogoAlt1` - Add a custom logo
* `getCustomLogo` - Get a specific custom logo
* `getCustomLogoAlt1` - Get a specific custom logo
* `getCustomLogos` - Get all the custom logos that belong to a user
* `getCustomLogosAlt1` - Get all the custom logos that belong to a user

### Embed Presets\Essentials

* `editEmbedPreset` - Edit an embed preset
* `editEmbedPresetAlt1` - Edit an embed preset
* `getEmbedPreset` - Get a specific embed preset
* `getEmbedPresetAlt1` - Get a specific embed preset
* `getEmbedPresets` - Get all the embed presets that a user has created
* `getEmbedPresetsAlt1` - Get all the embed presets that a user has created

### Embed Presets\Videos

* `addVideoEmbedPreset` - Add an embed preset to a video
* `createVideoCustomLogo` - Add a new custom logo to a video
* `deleteVideoEmbedPreset` - Remove an embed preset from a video
* `getEmbedPresetVideos` - Get all the videos that have been added to an embed preset
* `getEmbedPresetVideosAlt1` - Get all the videos that have been added to an embed preset
* `getVideoCustomLogo` - Get a custom video logo
* `getVideoEmbedPreset` - Check if an embed preset has been added to a video

### Groups\Essentials

* `createGroup` - Create a group
* `deleteGroup` - Delete a group
* `getGroup` - Get a specific group
* `getGroups` - Get all groups

### Groups\Subscription

* `joinGroup` - Add a user to a group
* `joinGroupAlt1` - Add a user to a group
* `leaveGroup` - Remove a user from a group
* `leaveGroupAlt1` - Remove a user from a group

### Groups\Users

* `checkIfUserJoinedGroup` - Check if a user has joined a group
* `checkIfUserJoinedGroupAlt1` - Check if a user has joined a group
* `getGroupMembers` - Get all the members of a group
* `getUserGroups` - Get all the groups that a user has joined
* `getUserGroupsAlt1` - Get all the groups that a user has joined

### Groups\Videos

* `addVideoToGroup` - Add a video to a group
* `deleteVideoFromGroup` - Remove a video from a group
* `getGroupVideo` - Get a specific video in a group
* `getGroupVideos` - Get all the videos in a group

### Likes\Essentials

* `checkIfUserLikedVideo` - Check if a user has liked a video
* `checkIfUserLikedVideoAlt1` - Check if a user has liked a video
* `getLikes` - Get all the videos that a user has liked
* `getLikesAlt1` - Get all the videos that a user has liked
* `getVideoLikes` - Get all the users who have liked a video
* `getVideoLikesAlt1` - Get all the users who have liked a video
* `getVodLikes` - Get all the users who have liked a video on an On Demand page
* `likeVideo` - Cause a user to like a video
* `likeVideoAlt1` - Cause a user to like a video
* `unlikeVideo` - Cause a user to unlike a video
* `unlikeVideoAlt1` - Cause a user to unlike a video

### On Demand\Backgrounds

* `createVodBackground` - Add a background to an On Demand page
* `deleteVodBackground` - Remove a background from an On Demand page
* `editVodBackground` - Edit a background of an On Demand page
* `getVodBackground` - Get a specific background of an On Demand page
* `getVodBackgrounds` - Get all the backgrounds of an On Demand page

### On Demand\Essentials

* `createVod` - Create an On Demand page
* `createVodAlt1` - Create an On Demand page
* `deleteVodDraft` - Delete a draft of an On Demand page
* `editVod` - Edit an On Demand page
* `getUserVods` - Get all the On Demand pages of a user
* `getUserVodsAlt1` - Get all the On Demand pages of a user
* `getVod` - Get a specific On Demand page

### On Demand\Genres

* `addVodGenre` - Add a genre to an On Demand page
* `deleteVodGenre` - Remove a genre from an On Demand page
* `getGenreVod` - Get a specific On Demand page in a genre
* `getGenreVods` - Get all the On Demand pages in a genre
* `getVodGenre` - Get a specific On Demand genre
* `getVodGenreByOndemandId` - Check whether an On Demand page belongs to a genre
* `getVodGenres` - Get all On Demand genres
* `getVodGenresByOndemandId` - Get all the genres of an On Demand page

### On Demand\Posters

* `addVodPoster` - Add a poster to an On Demand page
* `editVodPoster` - Edit a poster of an On Demand page
* `getVodPoster` - Get a specific poster of an On Demand page
* `getVodPosters` - Get all the posters of an On Demand page

### On Demand\Promotions

* `createVodPromotion` - Add a promotion to an On Demand page
* `deleteVodPromotion` - Remove a promotion from an On Demand page
* `getVodPromotion` - Get a specific promotion on an On Demand page
* `getVodPromotionCodes` - Get all the codes of a promotion on an On Demand page
* `getVodPromotions` - Get all the promotions on an On Demand page

### On Demand\Purchases and Rentals

* `checkIfVodWasPurchased` - Check if a user has made a purchase or rental from an On Demand page
* `checkIfVodWasPurchasedAlt1` - Check if a user has made a purchase or rental from an On Demand page
* `getVodPurchases` - Get all the On Demand purchases and rentals that a user has made

### On Demand\Regions

* `addVodRegion` - Add a specific region to an On Demand page
* `deleteVodRegion` - Remove a specific region from an On Demand page
* `deleteVodRegions` - Remove a list of regions from an On Demand page
* `getRegion` - Get a specific On Demand region
* `getRegions` - Get all the On Demand regions
* `getVodRegion` - Get a specific region of an On Demand page
* `getVodRegions` - Get all the regions of an On Demand page
* `setVodRegions` - Add a list of regions to an On Demand page

### On Demand\Seasons

* `getVodSeason` - Get a specific season on an On Demand page
* `getVodSeasonVideos` - Get all the videos in a season on an On Demand page
* `getVodSeasons` - Get all the seasons on an On Demand page

### On Demand\Videos

* `addVideoToVod` - Add a video to an On Demand page
* `deleteVideoFromVod` - Remove a video from an On Demand page
* `getVodVideo` - Get a specific video on an On Demand page
* `getVodVideos` - Get all the videos on an On Demand page

### Portfolios\Essentials

* `getPortfolio` - Get a specific portfolio
* `getPortfolioAlt1` - Get a specific portfolio
* `getPortfolios` - Get all the portfolios that belong to a user
* `getPortfoliosAlt1` - Get all the portfolios that belong to a user

### Portfolios\Videos

* `addVideoToPortfolio` - Add a video to a portfolio
* `addVideoToPortfolioAlt1` - Add a video to a portfolio
* `deleteVideoFromPortfolio` - Remove a video from a portfolio
* `deleteVideoFromPortfolioAlt1` - Remove a video from a portfolio
* `getPortfolioVideo` - Get a specific video in a portfolio
* `getPortfolioVideoAlt1` - Get a specific video in a portfolio
* `getPortfolioVideos` - Get all the videos in a portfolio
* `getPortfolioVideosAlt1` - Get all the videos in a portfolio

### Projects\Essentials

* `createProject` - Create a project
* `createProjectAlt1` - Create a project
* `deleteProject` - Delete a project
* `deleteProjectAlt1` - Delete a project
* `editProject` - Edit a project
* `editProjectAlt1` - Edit a project
* `getProject` - Get a specific project
* `getProjectAlt1` - Get a specific project
* `getProjects` - Get all the projects that belong to a user
* `getProjectsAlt1` - Get all the projects that belong to a user

### Projects\Videos

* `addVideoToProject` - Add a specific video to a project
* `addVideoToProjectAlt1` - Add a specific video to a project
* `addVideosToProject` - Add a list of videos to a project
* `addVideosToProjectAlt1` - Add a list of videos to a project
* `getProjectVideos` - Get all the videos in a project
* `getProjectVideosAlt1` - Get all the videos in a project
* `removeVideoFromProject` - Remove a specific video from a project
* `removeVideoFromProjectAlt1` - Remove a specific video from a project
* `removeVideosFromProject` - Remove a list of videos from a project
* `removeVideosFromProjectAlt1` - Remove a list of videos from a project

### Tags\Essentials

* `getTag` - Get a specific tag

### Users\Essentials

* `editUser` - Edit a user
* `editUserAlt1` - Edit a user
* `getUser` - Get a user
* `getUserAlt1` - Get a user

### Users\Feed

* `getFeed` - Get all videos in a user's feed
* `getFeedAlt1` - Get all videos in a user's feed

### Users\Follows

* `checkIfUserIsFollowing` - Check if a user is following another user
* `checkIfUserIsFollowingAlt1` - Check if a user is following another user
* `followUser` - Follow a specific user
* `followUserAlt1` - Follow a specific user
* `followUsers` - Follow a list of users
* `followUsersAlt1` - Follow a list of users
* `getFollowers` - Get all the followers of a user
* `getFollowersAlt1` - Get all the followers of a user
* `getUserFollowing` - Get all the users that a user is following
* `getUserFollowingAlt1` - Get all the users that a user is following
* `unfollowUser` - Unfollow a user
* `unfollowUserAlt1` - Unfollow a user

### Users\Internal

* `searchUsers` - Search for users

### Users\Pictures

* `createPicture` - Add a user picture
* `createPictureAlt1` - Add a user picture
* `deletePicture` - Delete a user picture
* `deletePictureAlt1` - Delete a user picture
* `editPicture` - Edit a user picture
* `editPictureAlt1` - Edit a user picture
* `getPicture` - Get a specific user picture
* `getPictureAlt1` - Get a specific user picture
* `getPictures` - Get all the pictures that belong to a user
* `getPicturesAlt1` - Get all the pictures that belong to a user

### Users\Watch History

* `deleteFromWatchHistory` - Delete a specific video from a user's watch history
* `deleteWatchHistory` - Delete a user's watch history
* `getWatchHistory` - Get all the videos that a user has watched

### Videos\Comments

* `createComment` - Add a comment to a video
* `createCommentAlt1` - Add a comment to a video
* `createCommentReply` - Add a reply to a video comment
* `deleteComment` - Delete a video comment
* `editComment` - Edit a video comment
* `getComment` - Get a specific video comment
* `getCommentReplies` - Get all the replies to a video comment
* `getComments` - Get all the comments on a video
* `getCommentsAlt1` - Get all the comments on a video

### Videos\Content Ratings

* `getContentRatings` - Get all content ratings

### Videos\Creative Commons

* `getCcLicenses` - Get all Creative Commons licenses

### Videos\Credits

* `addVideoCredit` - Credit a user in a video
* `addVideoCreditAlt1` - Credit a user in a video
* `deleteVideoCredit` - Delete a credit for a user in a video
* `editVideoCredit` - Edit a credit for a user in a video
* `getVideoCredit` - Get a specific credited user in a video
* `getVideoCredits` - Get all the credited users in a video
* `getVideoCreditsAlt1` - Get all the credited users in a video

### Videos\Embed Privacy

* `addVideoPrivacyDomain` - Permit a video to be embedded on a domain
* `deleteVideoPrivacyDomain` - Restrict a video from being embedded on a domain
* `getVideoPrivacyDomains` - Get all the domains on which a video can be embedded

### Videos\Essentials

* `checkIfUserOwnsVideo` - Check if a user owns a video
* `checkIfUserOwnsVideoAlt1` - Check if a user owns a video
* `deleteVideo` - Delete a video
* `editVideo` - Edit a video
* `getAppearances` - Get all the videos in which a user appears
* `getAppearancesAlt1` - Get all the videos in which a user appears
* `getVideo` - Get a specific video
* `getVideos` - Get all the videos that a user has uploaded
* `getVideosAlt1` - Get all the videos that a user has uploaded
* `searchVideos` - Search for videos

### Videos\Languages

* `getLanguages` - Get all languages

### Videos\Recommendations

* `getRelatedVideos` - Get all the related videos of a video

### Videos\Tags

* `addVideoTag` - Add a specific tag to a video
* `addVideoTags` - Add a list of tags to a video
* `checkVideoForTag` - Check if a tag has been added to a video
* `deleteVideoTag` - Remove a tag from a video
* `getVideoTags` - Get all the tags of a video
* `getVideosWithTag` - Get all the videos with a specific tag

### Videos\Text Tracks

* `createTextTrack` - Add a text track to a video
* `createTextTrackAlt1` - Add a text track to a video
* `deleteTextTrack` - Delete a text track
* `editTextTrack` - Edit a text track
* `getTextTrack` - Get a specific text track
* `getTextTracks` - Get all the text tracks of a video
* `getTextTracksAlt1` - Get all the text tracks of a video

### Videos\Thumbnails

* `createVideoThumbnail` - Add a video thumbnail
* `createVideoThumbnailAlt1` - Add a video thumbnail
* `deleteVideoThumbnail` - Delete a video thumbnail
* `editVideoThumbnail` - Edit a video thumbnail
* `getVideoThumbnail` - Get a video thumbnail
* `getVideoThumbnails` - Get all the thumbnails of a video
* `getVideoThumbnailsAlt1` - Get all the thumbnails of a video

### Videos\Upload

* `completeStreamingUpload` - Complete a user's streaming upload
* `getUploadAttempt` - Get a user's upload attempt
* `uploadVideo` - Upload a video
* `uploadVideoAlt1` - Upload a video

### Videos\Versions

* `createVideoVersion` - Add a version to a video

### Videos\Viewing Privacy

* `addVideoPrivacyUser` - Permit a specific user to view a private video
* `addVideoPrivacyUsers` - Permit a list of users to view a private video
* `addVideoPrivacyUsersAlt1` - Permit a list of users to view a private video
* `deleteVideoPrivacyUser` - Restrict a user from viewing a private video
* `getVideoPrivacyUsers` - Get all the users who can view a user's private videos by default
* `getVideoPrivacyUsersAlt1` - Get all the users who can view a user's private videos by default

### Watch Later Queue\Essentials

* `addVideoToWatchLater` - Add a video to a user's Watch Later queue
* `addVideoToWatchLaterAlt1` - Add a video to a user's Watch Later queue
* `checkWatchLaterQueue` - Check if a user has added a specific video to their Watch Later queue
* `checkWatchLaterQueueAlt1` - Check if a user has added a specific video to their Watch Later queue
* `deleteVideoFromWatchLater` - Remove a video from a user's Watch Later queue
* `deleteVideoFromWatchLaterAlt1` - Remove a video from a user's Watch Later queue
* `getWatchLaterQueue` - Get all the videos in a user's Watch Later queue
* `getWatchLaterQueueAlt1` - Get all the videos in a user's Watch Later queue

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
